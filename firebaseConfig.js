import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
  getDoc,
  orderBy,
  serverTimestamp,
  getDocs,
  onSnapshot,
  deleteDoc,
  query,
  where,
  updateDoc,
  arrayRemove,
  arrayUnion,
} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDOEOupY-zVmhoJyzRd_x926mhq_YB8mmQ",
  authDomain: "my-blogging-app-8e946.firebaseapp.com",
  projectId: "my-blogging-app-8e946",
  storageBucket: "my-blogging-app-8e946.appspot.com",
  messagingSenderId: "313688852357",
  appId: "1:313688852357:web:02c35b7cd8c98756c7e6ec"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  collection,
  addDoc,
  setDoc,
  getDoc,
  getDocs,
  signOut,
  doc,
  onSnapshot,
  onAuthStateChanged,
  deleteDoc,
  storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  query,
  orderBy,
  serverTimestamp,
  auth,
  db,
  where,
  updateDoc,
  arrayRemove,
  arrayUnion,
};







