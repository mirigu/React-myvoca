// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1bkwPq8656ZQ1h5ng1eInDAmBWnLf0nw",
  authDomain: "myvoca-17754.firebaseapp.com",
  projectId: "myvoca-17754",
  storageBucket: "myvoca-17754.appspot.com",
  messagingSenderId: "290326866843",
  appId: "1:290326866843:web:dce34ff8bb2bca9170cf3e",
  measurementId: "G-5WV6K22PTD",
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();
