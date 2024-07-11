// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB69MtNnLr_rsX3DYUU4E5IHSApUdNsGOk",
  authDomain: "fir-5ef3d.firebaseapp.com",
  projectId: "fir-5ef3d",
  storageBucket: "fir-5ef3d.appspot.com",
  messagingSenderId: "896843586095",
  appId: "1:896843586095:web:43d05e7f137affeac7c4da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
