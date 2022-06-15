// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfazHcd2mZSfJdUWvKAT9c3KSjNtaH7PE",
  authDomain: "insightful-a10e3.firebaseapp.com",
  projectId: "insightful-a10e3",
  storageBucket: "insightful-a10e3.appspot.com",
  messagingSenderId: "896118324426",
  appId: "1:896118324426:web:4e51b3eb7a64252b204833"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider(app);
const auth = getAuth(app);






export { provider, auth};