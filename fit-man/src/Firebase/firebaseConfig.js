// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAz__s4S_1-3NjIigHCtvIsjS4G08bHriY",
  authDomain: "fitman-9b759.firebaseapp.com",
  databaseURL:
    "https://fitman-9b759-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fitman-9b759",
  storageBucket: "fitman-9b759.appspot.com",
  messagingSenderId: "669257425931",
  appId: "1:669257425931:web:383dbe8ee48602c0d5930e",
  measurementId: "G-F02DPZS2SY",
};

initializeApp(firebaseConfig);

const projectStorage = getStorage();

export {
  projectStorage,
  ref,
  uploadBytesResumable,
  uploadBytes,
  getDownloadURL,
  deleteObject,
};
