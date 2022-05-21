import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCbhzSfko2P50D9uwZV74-1IRmWa87X4QE",
  authDomain: "tool-manufacturers.firebaseapp.com",
  projectId: "tool-manufacturers",
  storageBucket: "tool-manufacturers.appspot.com",
  messagingSenderId: "954300841568",
  appId: "1:954300841568:web:db33363fb82efa2feb8d05"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);

 export default auth;