//@ts-ignore
import { initializeApp } from "firebase/app";
//@ts-ignore
import { getAuth } from "firebase/auth";
//@ts-ignore
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAw9-oQPJAZqyRnbSiBiVfObkAx5xMOmTk",
  authDomain: "triptracker-e6178.firebaseapp.com",
  projectId: "triptracker-e6178",
  storageBucket: "triptracker-e6178.appspot.com",
  messagingSenderId: "158435478258",
  appId: "1:158435478258:web:a332f1337fb15c247cde6b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { app, auth, db };
