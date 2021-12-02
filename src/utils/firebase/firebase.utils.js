import { doc, getDoc, setDoc } from "@firebase/firestore";
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
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: " select_account" });

export const signInWithGoogle = () => {
  try {
    signInWithPopup(auth, provider);
  } catch (e) {
    console.log(e.message);
  }
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = await doc(firestore, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);
  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (e) {
      console.log(e.message);
    }
  }
  return userRef;
};
