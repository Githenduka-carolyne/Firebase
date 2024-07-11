import React from "react";
import { GoogleButton } from "react-google-button";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
import "./home.css";
import { auth } from "../firebase";

const Home = () => {
  const handlesubmit = async () => {
    try {
      const response = await signInWithPopup(auth, googleProvider);
      console.log(response.user);
    } catch (error) {
      console.log(error);
    }
  };
  const handleFacebook = async () => {
    try {
      const response = await signInWithPopup(auth, facebookProvider);
      console.log(response.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="signin">
        <p>Sign In</p>
      </div>
      <button className="google-button">
        <GoogleButton onClick={handlesubmit} />
      </button>
      <button className="google-button" onClick={handleFacebook}>
        <p>Log in in facebook</p>
      </button>
    </>
  );
};
export default Home;
