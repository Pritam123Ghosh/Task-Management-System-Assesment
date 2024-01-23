// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getDatabase} from "firebase/database"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8Yd07JCmsVx3gf7C35YgHZJag6_YPmso",
  authDomain: "task-management-ac2a1.firebaseapp.com",
  projectId: "task-management-ac2a1",
  storageBucket: "task-management-ac2a1.appspot.com",
  messagingSenderId: "305348080133",
  appId: "1:305348080133:web:b43a4a10a20f3d39bd226c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getDatabase(app);
