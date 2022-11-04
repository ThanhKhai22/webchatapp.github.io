import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDBkD2xryE7om-gxq3HaGElDX0FoDKhJcI",
  authDomain: "doan-828b7.firebaseapp.com",
  projectId: "doan-828b7",
  storageBucket: "doan-828b7.appspot.com",
  messagingSenderId: "416163248864",
  appId: "1:416163248864:web:c8d3807d4e435e55a2ae85"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()