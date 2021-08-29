import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/firestore";
import "firebase/storage";

const app = firebase.initializeApp({
  apiKey : "AIzaSyAR3v0VXi6O2gSmD25GKsDP0J1flJajhtw" , 
  authDomain : "rakuten-faa63.firebaseapp.com" , 
  projectId : "rakuten-faa63" , 
  storageBucket : "rakuten-faa63.appspot.com" , 
  messagingSenderId : "96315073770" , 
  appId : "1: 96315073770: web: a0dedc801b752f0c5ba393" , 
  measurementId : "G-5RGV20PS47"
  });

  const firestore = app.firestore();
  export const database = {

    users: firestore.collection('users')
    
  }
  export const auth = app.auth();
  export default app;