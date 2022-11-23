import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyBiHiop8_lTIqsNWpSZGXgQRW-LNXGqMpY",
  authDomain: "oscar-teach-cursos.firebaseapp.com",
  projectId: "oscar-teach-cursos",
  storageBucket: "oscar-teach-cursos.appspot.com",
  messagingSenderId: "483470891404",
  appId: "1:483470891404:web:7f9a2517866ef8b75b1ea9",
  measurementId: "G-LC5DRLNSC4"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)