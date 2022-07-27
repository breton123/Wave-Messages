// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOt8r74NYjPJC9SHiIBQGwdOTwO09NgPs",
  authDomain: "messenger-app-bba6c.firebaseapp.com",
  projectId: "messenger-app-bba6c",
  storageBucket: "messenger-app-bba6c.appspot.com",
  messagingSenderId: "974902517697",
  appId: "1:974902517697:web:72c7fba156965b86dad940"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();

export {app, db };
