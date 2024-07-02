// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD98ucvnR1RHGixqHCO2-e1gWOW-0XPk0",
  authDomain: "qsl-mern.firebaseapp.com",
  projectId: "qsl-mern",
  storageBucket: "qsl-mern.appspot.com",
  messagingSenderId: "359747099103",
  appId: "1:359747099103:web:8a81c75f12c812ef4d8c6a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);