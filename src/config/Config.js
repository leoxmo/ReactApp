
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import 'firebase/compat/storage';


const firebaseConfig = {
  apiKey: "AIzaSyAX4M_-OPiGrzqXKF-AAyaW7SCrykB6lVo",
  authDomain: "ecommerce-with-react-2ac6.firebaseapp.com",
  projectId: "ecommerce-with-react-2ac6",
  storageBucket: "ecommerce-with-react-2ac6.appspot.com",
  messagingSenderId: "150176960467",
  appId: "1:150176960467:web:327b25ccde615c44e32926",
  measurementId: "G-1Q3YYXGSQP"
};

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();

  export{auth, db, storage}
