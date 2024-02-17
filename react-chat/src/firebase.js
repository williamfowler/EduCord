// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBgi8IxKz3l6mum1huu0uctQQb7LVBvhNc",
    authDomain: "jumbohacks-77794.firebaseapp.com",
    projectId: "jumbohacks-77794",
    storageBucket: "jumbohacks-77794.appspot.com",
    messagingSenderId: "503728818260",
    appId: "1:503728818260:web:484dfd5e476ed86f9845c1",
    // measurementId: "G-CFM7S07CFH"
  };

// Initialize Firebase
//sfksdjgoihgio3jg03j
//dfkdjhigehi
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);