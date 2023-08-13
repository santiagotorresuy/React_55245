// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXupXQXaPqUcajhn_qnlNlNqNMsCdRabQ",
  authDomain: "react-55245-15427.firebaseapp.com",
  projectId: "react-55245-15427",
  storageBucket: "react-55245-15427.appspot.com",
  messagingSenderId: "568980061347",
  appId: "1:568980061347:web:a07358eed487dc92d79316"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)