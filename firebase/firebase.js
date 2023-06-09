// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJUGEgPLbIhXdLb6RDe8GLUZFqKg5HnQo",
  authDomain: "chat-app-ec961.firebaseapp.com",
  projectId: "chat-app-ec961",
  storageBucket: "chat-app-ec961.appspot.com",
  messagingSenderId: "22193971772",
  appId: "1:22193971772:web:0947cfc5fef1f4f75b1939"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
