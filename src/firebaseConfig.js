// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlsWLctMYv66UGnPjFWDt8THSGDIjbG-A",
  authDomain: "react-firestore-tailwind.firebaseapp.com",
  projectId: "react-firestore-tailwind",
  storageBucket: "react-firestore-tailwind.firebasestorage.app",
  messagingSenderId: "434395936242",
  appId: "1:434395936242:web:fcad21a9ba61c64977276b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);