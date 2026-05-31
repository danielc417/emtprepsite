import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBVYRyVb_BB68YRSwLIRoGHXuEL-Nu5yX0",
  authDomain: "emt-prep-site.firebaseapp.com",
  projectId: "emt-prep-site",
  storageBucket: "emt-prep-site.firebasestorage.app",
  messagingSenderId: "427775670036",
  appId: "1:427775670036:web:3cacc1f8ef4547f082b401",
  measurementId: "G-6ZHH7LCET2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };