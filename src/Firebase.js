
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// eslint-disable-next-line no-unused-vars
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGntQHr_3einZi38CuABnZ_f7RmHV20FA",
  authDomain: "anoroam-29632.firebaseapp.com",
  projectId: "anoroam-29632",
  storageBucket: "anoroam-29632.appspot.com",
  messagingSenderId: "787304391414",
  appId: "1:787304391414:web:56ed1c668a3272a4d002d7",
  measurementId: "G-83F3RT67NB"
};

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export{ auth, provider};
  export default db;
  