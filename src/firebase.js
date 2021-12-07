import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDT_QRdtH4ay3wuaVaboiIlsNtQLZffueA",
  authDomain: "line-clone-72793.firebaseapp.com",
  projectId: "line-clone-72793",
  storageBucket: "line-clone-72793.appspot.com",
  messagingSenderId: "344650339675",
  appId: "1:344650339675:web:443e33d6b9b70af692367e",
  measurementId: "G-79V849YC9B",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();
export { db, auth };
