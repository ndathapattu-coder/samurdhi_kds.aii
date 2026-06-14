// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
