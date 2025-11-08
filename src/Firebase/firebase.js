// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcjGzkC3mgtplzYoOP1yodtGc3Bf2pcQ8",
  authDomain: "smart-deals-auth-1c4d3.firebaseapp.com",
  projectId: "smart-deals-auth-1c4d3",
  storageBucket: "smart-deals-auth-1c4d3.firebasestorage.app",
  messagingSenderId: "162100778039",
  appId: "1:162100778039:web:31172a655d6ebf417ddbb2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
