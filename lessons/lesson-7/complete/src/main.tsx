import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { initializeApp } from "firebase/app";
import App from "./App";

import "./index.css";

// VITE_FIREBASE_API_KEY=AIzaSyDFsaiPdvwLgYWoJjJUuEUL5ylCyV50CCI
// VITE_FIREBASE_AUTH_DOMAIN=fir-auth-29e0e.firebaseapp.com
// VITE_FIREBASE_PROJECT_ID=fir-auth-29e0e
// VITE_FIREBASE_STORAGE_BUCKET=fir-auth-29e0e.appspot.com
// VITE_FIREBASE_MESSAGING_SENDER_ID=280569829730
// VITE_FIREBASE_APP_ID=1:280569829730:web:819c4cf4cfe64d77d2343b

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);

console.log("firebaseApp =", firebaseApp);

export { firebaseApp };

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
