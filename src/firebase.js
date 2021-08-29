import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/firestore";
import "firebase/storage";

const app = firebase.initializeApp({
  apiKey: "AIzaSyC10G5qaUPrCuW-0Cq1bX-63ya-fykZRUE",
  authDomain: "something-d40eb.firebaseapp.com",
  projectId: "something-d40eb",
  storageBucket: "something-d40eb.appspot.com",
  messagingSenderId: "229377851990",
  appId: "1:229377851990:web:13d6a35ce5b9af2bec71f7",
  measurementId: "G-Z2F6JRKCYW"
  });

  const firestore = app.firestore();
  export const database = {

    users: firestore.collection('users')
    
  }
  export const auth = app.auth();
  export default app;