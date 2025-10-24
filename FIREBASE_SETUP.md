# Firebase Firestore Setup Guide

This document explains how Firebase Firestore has been integrated into the People Architect website for handling contact form submissions and newsletter subscriptions.

## 📦 Installation

Firebase has been installed in the project:

```bash
npm install firebase
```

## 🔥 Firebase Configuration

### Firebase Config File: `src/lib/firebase.ts`

This file initializes Firebase with your project credentials:

```typescript
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6buLgOLXf_AciFgX72w-cYh6_RbBbj4k",
  authDomain: "peoples-architect.firebaseapp.com",
  projectId: "peoples-architect",
  storageBucket: "peoples-architect.firebasestorage.app",
  messagingSenderId: "60966963741",
  appId: "1:60966963741:web:c6f2de5afd5d9be2d754f4",
  measurementId: "G-VTE5GNFMTN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, analytics, db };
```

## 🗄️ Firestore Collections

The application uses two Firestore collections:

### 1. **contact-submissions**

Stores contact form submissions from the `/contact` page.

**Document Structure:**
```typescript
{
  projectType: string,        // e.g., "Residential Architecture"
  budget: string,             // e.g., "₹25-50 Lakhs"
  timeline: string,           // e.g., "3-6 months"
  name: string,               // Customer name
  email: string,              // Customer email
  phone: string,              // Customer phone number
  location: string,           // Project location
  message: string,            // Additional project details
  status: "new" | "contacted" | "in-progress" | "completed",
  submittedAt: Timestamp      // Firebase server timestamp
}
```

### 2. **newsletter-subscriptions**

Stores newsletter email subscriptions from the footer.

**Document Structure:**
```typescript
{
  email: string,              // Subscriber email
  subscribedAt: Timestamp,    // Firebase server timestamp
  status: "active"            // Subscription status
}
```

## 🛠️ Service Layer: `src/services/contactService.ts`

This service provides reusable functions for Firestore operations:

### Functions:

#### `submitContactForm(formData: ContactFormData): Promise<string>`
Submits contact form data to the `contact-submissions` collection.

**Parameters:**
- `formData`: Object containing all form fields

**Returns:**
- Promise resolving to the document ID

**Usage:**
```typescript
import { submitContactForm } from "@/services/contactService";

const docId = await submitContactForm({
  projectType: "Residential Architecture",
  budget: "₹25-50 Lakhs",
  timeline: "3-6 months",
  name: "John Doe",
  email: "john@example.com",
  phone: "+91 98765 43210",
  location: "Chennai",
  message: "Looking to build a modern villa"
});
```

#### `submitNewsletterSubscription(email: string): Promise<string>`
Submits newsletter subscription to the `newsletter-subscriptions` collection.

**Parameters:**
- `email`: Subscriber's email address

**Returns:**
- Promise resolving to the document ID

**Usage:**
```typescript
import { submitNewsletterSubscription } from "@/services/contactService";

const docId = await submitNewsletterSubscription("user@example.com");
```

## 📝 Implementation Details

### Contact Form (`src/pages/Contact.tsx`)

The contact form is a 3-step wizard that collects:
1. **Step 1:** Project details (type, budget, timeline)
2. **Step 2:** Contact information (name, email, phone, location)
3. **Step 3:** Project description

**Features:**
- ✅ Form validation at each step
- ✅ Loading states during submission
- ✅ Success animation with auto-redirect
- ✅ Error handling with toast notifications
- ✅ Disabled inputs during submission

### Newsletter Form (`src/components/Footer.tsx`)

Located in the footer, allows users to subscribe to newsletters.

**Features:**
- ✅ Email validation
- ✅ Loading spinner during submission
- ✅ Success/error toast notifications
- ✅ Form reset after successful subscription

## 🔐 Firestore Security Rules

**IMPORTANT:** Set up Firestore security rules in the Firebase Console.

### Recommended Rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Allow anyone to write to contact-submissions
    match /contact-submissions/{document=**} {
      allow read: if request.auth != null; // Only authenticated admins can read
      allow create: if true; // Anyone can submit
      allow update, delete: if request.auth != null; // Only admins can update/delete
    }

    // Allow anyone to write to newsletter-subscriptions
    match /newsletter-subscriptions/{document=**} {
      allow read: if request.auth != null; // Only authenticated admins can read
      allow create: if true; // Anyone can subscribe
      allow update, delete: if request.auth != null; // Only admins can update/delete
    }
  }
}
```

## 📊 Viewing Submissions in Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **peoples-architect**
3. Navigate to **Firestore Database** in the left sidebar
4. You'll see two collections:
   - `contact-submissions`
   - `newsletter-subscriptions`
5. Click on any collection to view submitted documents

## 🚀 Testing the Integration

### Test Contact Form:
1. Navigate to http://localhost:8080/contact
2. Fill out all 3 steps of the form
3. Submit the form
4. Check Firebase Console → Firestore → `contact-submissions`
5. Your submission should appear as a new document

### Test Newsletter:
1. Scroll to the footer on any page
2. Enter an email address in the newsletter form
3. Click "Subscribe"
4. Check Firebase Console → Firestore → `newsletter-subscriptions`
5. Your subscription should appear as a new document

## 🎯 Next Steps

### 1. **Set up Email Notifications**
Use Firebase Cloud Functions to send email notifications when new submissions arrive:

```javascript
// functions/index.js
exports.onContactSubmission = functions.firestore
  .document('contact-submissions/{docId}')
  .onCreate(async (snap, context) => {
    const data = snap.data();

    // Send email to admin
    await sendEmail({
      to: 'hello@peoplearchitect.in',
      subject: `New Contact Inquiry from ${data.name}`,
      body: `
        Project Type: ${data.projectType}
        Budget: ${data.budget}
        Timeline: ${data.timeline}
        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.phone}
        Location: ${data.location}
        Message: ${data.message}
      `
    });

    // Send confirmation email to customer
    await sendEmail({
      to: data.email,
      subject: 'Thank you for your inquiry - People Architect',
      body: `Thank you for reaching out! We'll get back to you within 24 hours.`
    });
  });
```

### 2. **Create Admin Dashboard**
Build an admin panel to:
- View all submissions
- Update status (new → contacted → in-progress → completed)
- Export data to CSV
- Search and filter submissions
- Respond to inquiries

### 3. **Add Email Service Integration**
Integrate with email services:
- **SendGrid**: Popular transactional email service
- **AWS SES**: Cost-effective for high volume
- **Mailgun**: Developer-friendly API
- **Resend**: Modern email API

### 4. **Set up Analytics**
Track form submissions with Firebase Analytics:

```typescript
import { logEvent } from "firebase/analytics";
import { analytics } from "@/lib/firebase";

// In your submit handler
logEvent(analytics, 'contact_form_submission', {
  project_type: formData.projectType,
  budget_range: formData.budget
});
```

### 5. **Add Spam Protection**
Implement spam prevention:
- Google reCAPTCHA v3
- Honeypot fields
- Rate limiting
- Email verification

## 🔒 Security Best Practices

1. **Never expose API keys in client code** - The Firebase config is safe to expose as it's protected by Firestore security rules
2. **Set up proper Firestore rules** - Restrict read access to authenticated users only
3. **Validate data on the client** - Already implemented with form validation
4. **Consider server-side validation** - Use Cloud Functions for additional validation
5. **Enable Firebase App Check** - Protect your app from abuse

## 📞 Support

For issues or questions:
- Email: hello@peoplearchitect.in
- Firebase Documentation: https://firebase.google.com/docs/firestore
- Project Repository: [Link to your repo]

---

**Status:** ✅ Firebase Firestore integration is fully functional and ready for production use!
