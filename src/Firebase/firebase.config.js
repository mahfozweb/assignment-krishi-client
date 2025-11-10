// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJdOarIAUEE4ntfFQrApQRnM89MbDopFw",
  authDomain: "assignment-krishi-client.firebaseapp.com",
  projectId: "assignment-krishi-client",
  storageBucket: "assignment-krishi-client.firebasestorage.app",
  messagingSenderId: "898571589285",
  appId: "1:898571589285:web:66b062746a0736578c1f4c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
