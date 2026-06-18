import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5UEO2A9nNGk8DPvH-B5cidzne33210RI",
  authDomain: "samurdhi-kds.firebaseapp.com",
  projectId: "samurdhi-kds",
  storageBucket: "samurdhi-kds.firebasestorage.app",
  messagingSenderId: "130353800520",
  appId: "1:130353800520:web:907ded9728a0c245043f7d",
  measurementId: "G-WLEELE84YB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
export const auth = getAuth(app);
export const db = getFirestore(app);

// Analytics (optional - works only in production/hosted sites)
export const analytics = getAnalytics(app);