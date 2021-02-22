import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBZFERnMQ3QzplsgCQp308fmn0qkumzJqc",
    authDomain: "resumebuilder-ef818.firebaseapp.com",
    projectId: "resumebuilder-ef818",
    storageBucket: "resumebuilder-ef818.appspot.com",
    messagingSenderId: "464533583043",
    appId: "1:464533583043:web:76791c4e0cc386c1155e76",
    measurementId: "G-FG1S6JJN7N"
  }

  firebase.initializeApp(config);
  

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: 'select_account'
  });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
  