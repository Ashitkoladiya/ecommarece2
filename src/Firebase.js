// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbkm_hgRKAZPDQbsdy-S5IbX4o8y-RJYI",
  authDomain: "ecommrce-45cd7.firebaseapp.com",
  projectId: "ecommrce-45cd7",
  storageBucket: "ecommrce-45cd7.appspot.com",
  messagingSenderId: "161595967730",
  appId: "1:161595967730:web:dafd5c4d04fef741b0686b",
  measurementId: "G-JPLCRRZV0Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);