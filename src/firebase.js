// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXl2SOw1NrqF1ggoIxPS-gEo7upxrqeaI",
  authDomain: "linkedin-clone-9323f.firebaseapp.com",
  projectId: "linkedin-clone-9323f",
  storageBucket: "linkedin-clone-9323f.appspot.com",
  messagingSenderId: "260634537135",
  appId: "1:260634537135:web:71b0ce812853aff735f85a",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
