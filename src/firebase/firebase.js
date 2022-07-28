// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLalHkBXODPW8aAdTyQLU5ouy8UAPuRWs",
  authDomain: "gameshop-3c86e.firebaseapp.com",
  projectId: "gameshop-3c86e",
  storageBucket: "gameshop-3c86e.appspot.com",
  messagingSenderId: "602513727437",
  appId: "1:602513727437:web:7e88719cdec39acc74ae84",
  measurementId: "G-57YJVWPKZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);