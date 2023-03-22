// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD9MtaRpehZVjNfXSen7v5cu4pAQ14XrBA',
  authDomain: 'forest-fire-detection-ea43e.firebaseapp.com',
  projectId: 'forest-fire-detection-ea43e',
  storageBucket: 'forest-fire-detection-ea43e.appspot.com',
  messagingSenderId: '43422140901',
  appId: '1:43422140901:web:65a1e8d36c6a20bb7e870c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful!");
    window.location.href = "/home"
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, phone, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      phone,
      authProvider: 'local',
      email,
    });
    window.location.href = "/";
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export { auth, db, logInWithEmailAndPassword, registerWithEmailAndPassword };
