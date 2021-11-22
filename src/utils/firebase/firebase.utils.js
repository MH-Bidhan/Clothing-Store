import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7Q7CcoWOslm89TRPCydCCP6lkrK7ZW7I",
  authDomain: "crown-clothing-dee2a.firebaseapp.com",
  projectId: "crown-clothing-dee2a",
  storageBucket: "crown-clothing-dee2a.appspot.com",
  messagingSenderId: "132581034297",
  appId: "1:132581034297:web:7c43fba0fa44f4c62a80e8",
  measurementId: "G-7EGZD979Z0",
};
initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: " select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);
