// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJKPSrKi8zB1OlK-OIEvM2cqhN2wmLHEI",
  authDomain: "instagram-2-55b32.firebaseapp.com",
  projectId: "instagram-2-55b32",
  storageBucket: "instagram-2-55b32.appspot.com",
  messagingSenderId: "927470305387",
  appId: "1:927470305387:web:5687670c702e936aa4712e",
  measurementId: "G-PJCBXY5R1V"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);
const db = getFirestore();
const storage = getStorage();

export {app, db, storage}