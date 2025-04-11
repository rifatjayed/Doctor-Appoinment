// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-6awuxwVO40A2qx7bScPX1G6HvF95j4o",
  authDomain: "sasthya-daktar.firebaseapp.com",
  projectId: "sasthya-daktar",
  storageBucket: "sasthya-daktar.firebasestorage.app",
  messagingSenderId: "58728362992",
  appId: "1:58728362992:web:ceb38e3b9ad4d58150e335",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
