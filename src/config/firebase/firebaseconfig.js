// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRVucdMVOPFOdgNCSGRQUPWIT3fCuec2I",
  authDomain: "fir-database-login-signup.firebaseapp.com",
  projectId: "fir-database-login-signup",
  storageBucket: "fir-database-login-signup.appspot.com",
  messagingSenderId: "719546968713",
  appId: "1:719546968713:web:60d2a79e2185cf6e96f458",
  measurementId: "G-W3HL4CJSMR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export default app ; 