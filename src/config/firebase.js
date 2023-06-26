// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA30MEFUoH28kUszJvgVr5idezRKgEQJ1Y",
  authDomain: "filelinker-49.firebaseapp.com",
  projectId: "filelinker-49",
  storageBucket: "filelinker-49.appspot.com",
  messagingSenderId: "1067629909669",
  appId: "1:1067629909669:web:b83d0a70c2f5784ba5df4c",
  measurementId: "G-WQQNTP98M6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


const auth = getAuth(app);



export {auth}