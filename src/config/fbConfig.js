import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDteEU1kOMRvtu6zRzd3hKmkCIE60Uiw-g",
    authDomain: "mario-plan-6f840.firebaseapp.com",
    databaseURL: "https://mario-plan-6f840.firebaseio.com",
    projectId: "mario-plan-6f840",
    storageBucket: "",
    messagingSenderId: "650510524719",
    appId: "1:650510524719:web:eb1ba46e142f99128ac1da"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.firestore().settings({timestampsInSnapshots: true})


  export default firebase;