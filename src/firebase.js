// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAw8HIGbalmNruSHYaZAHuZgU21WllJwrA",
  authDomain: "whatsapp-clone-993ef.firebaseapp.com",
  projectId: "whatsapp-clone-993ef",
  storageBucket: "whatsapp-clone-993ef.appspot.com",
  messagingSenderId: "516026296019",
  appId: "1:516026296019:web:3d49655df2aebfdf45d626",
  measurementId: "G-Z2PV669WJT"
  })

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();


export {db,provider, auth, storage}