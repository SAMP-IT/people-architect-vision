import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface ContactFormData {
  projectType: string;
  budget: string;
  timeline: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  message: string;
}

export interface ContactSubmission extends ContactFormData {
  submittedAt: any; // Firestore Timestamp
  status: "new" | "contacted" | "in-progress" | "completed";
}

/**
 * Submit a contact form to Firestore
 * @param formData - The contact form data
 * @returns Promise with the document ID
 */
export const submitContactForm = async (formData: ContactFormData): Promise<string> => {
  try {
    const contactSubmission: Omit<ContactSubmission, "submittedAt"> & { submittedAt: any } = {
      ...formData,
      status: "new",
      submittedAt: serverTimestamp(),
    };

    const docRef = await addDoc(collection(db, "contact-submissions"), contactSubmission);

    console.log("Contact form submitted successfully with ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw new Error("Failed to submit contact form. Please try again.");
  }
};

/**
 * Submit newsletter subscription to Firestore
 * @param email - The subscriber's email
 * @returns Promise with the document ID
 */
export const submitNewsletterSubscription = async (email: string): Promise<string> => {
  try {
    const subscription = {
      email,
      subscribedAt: serverTimestamp(),
      status: "active",
    };

    const docRef = await addDoc(collection(db, "newsletter-subscriptions"), subscription);

    console.log("Newsletter subscription submitted successfully with ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error submitting newsletter subscription:", error);
    throw new Error("Failed to subscribe to newsletter. Please try again.");
  }
};
