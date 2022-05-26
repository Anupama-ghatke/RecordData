import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyA3UVts2M0HIUpIgWfO-FkvxmISBpUDv30",
  authDomain: "test-project-cc7fc.firebaseapp.com",
  projectId: "test-project-cc7fc",
  storageBucket: "test-project-cc7fc.appspot.com",
  messagingSenderId: "809854317714",
  appId: "1:809854317714:web:de128817843bdd0e88224b",
  measurementId: "G-VBN8JMEXQ3"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDatabase =getDatabase(app);