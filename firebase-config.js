import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyA5UEO2A9nNGk8DPvH-B5cidzne33210RI",
  authDomain: "samurdhi-kds.firebaseapp.com",
  projectId: "samurdhi-kds",
  storageBucket: "samurdhi-kds.firebasestorage.app",
  messagingSenderId: "130353800520",
  appId: "1:130353800520:web:907ded9728a0c245043f7d",
  measurementId: "G-WLEELE84YB"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
