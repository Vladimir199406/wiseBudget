// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmc_PeLMCGEZ-tmkuObGUKF1ngRlGm5O8",
  authDomain: "wisebudget-f25f7.firebaseapp.com",
  projectId: "wisebudget-f25f7",
  storageBucket: "wisebudget-f25f7.appspot.com",
  messagingSenderId: "484099231049",
  appId: "1:484099231049:web:4b495226c386626e3b5e98",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
