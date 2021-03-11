import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBgVOji3VWmynYiYKWzxqM73zrEtEDDfXM',
  authDomain: 'react-app-cursos-316bb.firebaseapp.com',
  projectId: 'react-app-cursos-316bb',
  storageBucket: 'react-app-cursos-316bb.appspot.com',
  messagingSenderId: '159837275504',
  appId: '1:159837275504:web:9bea9a8306fcdce85fbbb5',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
