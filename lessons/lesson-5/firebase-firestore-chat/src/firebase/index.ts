import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/auth/web/password-auth#web
import { getAuth } from "firebase/auth";
// https://cloud.google.com/firestore/docs
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

console.log("initialized app =", app);

export const auth = getAuth(app);
export const db = getFirestore(app);
