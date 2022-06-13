// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQmIac10suTh-3iPnFUZ723GPsjIpLBns",
  authDomain: "insightfullyfit.firebaseapp.com",
  projectId: "insightfullyfit",
  storageBucket: "insightfullyfit.appspot.com",
  messagingSenderId: "1037260515441",
  appId: "1:1037260515441:web:888bbbc4d8a2588d9513d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider(app);
const auth = getAuth(app);



export { provider, auth};