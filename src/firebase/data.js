// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo1JW5I9rmwXefsbQhMpZHKqsYE7UyEdM",
  authDomain: "ecommerce-react-c97a0.firebaseapp.com",
  projectId: "ecommerce-react-c97a0",
  storageBucket: "ecommerce-react-c97a0.appspot.com",
  messagingSenderId: "228018356858",
  appId: "1:228018356858:web:0286683c4a8c96d55531c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);