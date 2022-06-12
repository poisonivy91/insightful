import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

let config = {
    apiKey: "AIzaSyAQActsWPqlI1d2f_rWitjDMs07enz44WY",
  authDomain: "insightful-23bb4.firebaseapp.com",
  projectId: "insightful-23bb4",
  storageBucket: "insightful-23bb4.appspot.com",
  messagingSenderId: "951988844795",
  appId: "1:951988844795:web:4eca2c2938e4938699585e",
  measurementId: "G-TRT1Z413RN"
};

firebase.initalizeApp(config);

export const firebaseAuth = firebase.auth();
export const firestore = firebase.firestore()