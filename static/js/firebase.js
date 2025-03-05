import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: ""const mySecret = process.env[' anshika'],
  authDomain: "joviancareer.firebaseapp.com",
  projectId: "joviancareer",
  storageBucket: "joviancareer.firebasestorage.app",
  messagingSenderId: "361146394473",
  appId: "1:361146394473:web:40d289709006be25a67ff8",
  measurementId: "G-KR98F0JKM7"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Google Authentication Function
function googleSignIn() {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("✅ User signed in:", result.user);
    })
    .catch((error) => {
      console.error("❌ Sign-in error:", error);
    });
}

// Fetch Job Listings from Firestore
async function getJobs() {
  const querySnapshot = await getDocs(collection(db, "jobs"));
  querySnapshot.forEach((doc) => {
    console.log("📄 Job:", doc.data());
  });
}
