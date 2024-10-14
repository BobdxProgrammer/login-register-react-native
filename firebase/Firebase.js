// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYR15o05B8ug03DD8msPf61hnP0sdyR0k",
  authDomain: "logindata-6a1d7.firebaseapp.com",
  projectId: "logindata-6a1d7",
  storageBucket: "logindata-6a1d7.appspot.com",
  messagingSenderId: "986368977984",
  appId: "1:986368977984:web:164da35ffc1d232e29c3a5",
  measurementId: "G-3LWQQRPSLK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
