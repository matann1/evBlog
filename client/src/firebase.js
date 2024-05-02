// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ev-blog-d8d38.firebaseapp.com",
  projectId: "ev-blog-d8d38",
  storageBucket: "ev-blog-d8d38.appspot.com",
  messagingSenderId: "738527300862",
  appId: "1:738527300862:web:c17a12ae5df55e306529af",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
