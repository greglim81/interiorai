// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  authDomain: "myfirestore-379ff.firebaseapp.com",
  databaseURL: "https://myfirestore-379ff.firebaseio.com",
  projectId: "myfirestore-379ff",
  storageBucket: "myfirestore-379ff.firebasestorage.app",
  messagingSenderId: "24164266017",
  appId: "1:24164266017:web:13aaf044b22ba502cfb360"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);