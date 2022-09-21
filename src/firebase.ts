import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1pn2hbXX7QLM6b28USHEH7SEulJEv3QM",
  authDomain: "slack-clone-70cac.firebaseapp.com",
  projectId: "slack-clone-70cac",
  storageBucket: "slack-clone-70cac.appspot.com",
  messagingSenderId: "404377063189",
  appId: "1:404377063189:web:c920de3fcc1285578e631c",
  measurementId: "G-E1DNWEWZRV",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
