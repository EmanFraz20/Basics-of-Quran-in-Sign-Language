// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "qsl-mern-44049.firebaseapp.com",
  projectId: "qsl-mern-44049",
  storageBucket: "qsl-mern-44049.appspot.com",
  messagingSenderId: "736887504540",
  appId: "1:736887504540:web:3398de6e4c23d1f713f759"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);