import firebase from 'firebase/app';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCaUuarDZe8ijjEtYCBP75LGXOXDEk_kAY",
    authDomain: "porodni-prani.firebaseapp.com",
    projectId: "porodni-prani",
    storageBucket: "porodni-prani.appspot.com",
    messagingSenderId: "193474989247",
    appId: "1:193474989247:web:73bd8eb90d577a20cf4a0a"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore()