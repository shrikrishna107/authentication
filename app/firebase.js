// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA23xxNxrKL6XyK0xo8i5JFP55g2mhzaiU",
  authDomain: "auth-bf1c7.firebaseapp.com",
  projectId: "auth-bf1c7",
  storageBucket: "auth-bf1c7.appspot.com",
  messagingSenderId: "503221232432",
  appId: "1:503221232432:web:20bfe5a5626ba2c90edef5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);