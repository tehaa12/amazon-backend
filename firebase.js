// firebase.js for backend (Node.js)
const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore"); // Firestore

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7IcmUkwglEYtvNOi2h86ZjotZm18WQlE",
  authDomain: "clone-36550.firebaseapp.com",
  projectId: "clone-36550",
  storageBucket: "clone-36550.appspot.com",
  messagingSenderId: "334191210665",
  appId: "1:334191210665:web:3fcedd46d89c328b85b9b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Firestore

// Exporting Firestore instance
module.exports = { db };
