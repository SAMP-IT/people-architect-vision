// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6buLgOLXf_AciFgX72w-cYh6_RbBbj4k",
  authDomain: "peoples-architect.firebaseapp.com",
  projectId: "peoples-architect",
  storageBucket: "peoples-architect.firebasestorage.app",
  messagingSenderId: "60966963741",
  appId: "1:60966963741:web:c6f2de5afd5d9be2d754f4",
  measurementId: "G-VTE5GNFMTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (only in browser environment)
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Initialize Firestore
const db = getFirestore(app);

export { app, analytics, db };
