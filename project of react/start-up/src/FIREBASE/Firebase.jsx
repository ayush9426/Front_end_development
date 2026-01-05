// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4ZJkhUypwobdzBhCFOu-YgzEJyurs7aU",
  authDomain: "start-up-4445b.firebaseapp.com",
  projectId: "start-up-4445b",
  storageBucket: "start-up-4445b.firebasestorage.app",
  messagingSenderId: "82633403690",
  appId: "1:82633403690:web:2aade6a640b2fee9bb0253",
  measurementId: "G-2FG2GSNPPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const fireDb = getFirestore(app)