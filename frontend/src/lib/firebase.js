import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD4a9-GfumDhkpmkSvr4tKfvHxhTq5upgw",
  authDomain: "examhub-auth-5f84b.firebaseapp.com",
  projectId: "examhub-auth-5f84b",
  storageBucket: "examhub-auth-5f84b.firebasestorage.app",
  messagingSenderId: "577946327245",
  appId: "1:577946327245:web:0820c5e11c67f3ec32b184",
  measurementId: "G-6Q06GL3C4X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
