// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-Ee54W_APsOX7ePwCuRtgYIKW2eaUrNY",
  authDomain: "virtual-travel-wishlist.firebaseapp.com",
  projectId: "virtual-travel-wishlist",
  storageBucket: "virtual-travel-wishlist.firebasestorage.app",
  messagingSenderId: "623027952500",
  appId: "1:623027952500:web:389f0ea0e4298c44f2ea21",
  measurementId: "G-L9GR2ZV6B4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);