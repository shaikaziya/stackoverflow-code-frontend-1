import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBbTFtIvYXm7qCqWTP_RlRPPq0qBAEATGM",
  authDomain: "stack-over-flow-701c7.firebaseapp.com",
  projectId: "stack-over-flow-701c7",
  storageBucket: "stack-over-flow-701c7.appspot.com",
  messagingSenderId: "273176959061",
  appId: "1:273176959061:web:fbb929e3624b23d9addcdc",
  measurementId: "G-ESD2CEJ3QP"
};

const app  = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
// export default db;



// var admin = require("firebase-admin");

// var serviceAccount = require("path/to/serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });