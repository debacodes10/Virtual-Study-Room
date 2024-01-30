// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtmPNKxDxa4bAyfvbgPU2_QILwhdB5FAY",
  authDomain: "shhh-d06d0.firebaseapp.com",
  projectId: "shhh-d06d0",
  storageBucket: "shhh-d06d0.appspot.com",
  messagingSenderId: "786159936532",
  appId: "1:786159936532:web:9ccee997a60d0d6b85b301"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app