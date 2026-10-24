import { initializeApp } from "firebase/app";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";

// Imports the application's Firebase configuration using the .env file
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_APP_ID,
};

// Initializing Firebase with the configuration.
const app = initializeApp(firebaseConfig);

// This variable is used as a reference to the Firestore service.
export const db = getFirestore(app);

if (process.env.NODE_ENV == "development") {
  connectFirestoreEmulator(db, "127.0.0.1", 8080);
}
