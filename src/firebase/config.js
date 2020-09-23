import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBK5uh3UdVvO7OWzrOpbcgPkfanQx4ETHw",
  authDomain: "shai-brides-v2.firebaseapp.com",
  databaseURL: "https://shai-brides-v2.firebaseio.com",
  projectId: "shai-brides-v2",
  storageBucket: "shai-brides-v2.appspot.com",
  messagingSenderId: "1010396183352",
  appId: "1:1010396183352:web:168f5e261d57fd89a51fcd",
  measurementId: "G-W8Q4LJ6PQL"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore();

export default firebase;
