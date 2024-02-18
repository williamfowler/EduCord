import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";

// added
import { auth, db } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";



const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);

    // const { uid, displayName, photoURL } = auth.currentUser;
    // addDoc(collection(db, "users"), {
    //   name: displayName,
    //   createdAt: serverTimestamp(),
    // });
    // window.alert("new user signed in");
  };

  return (
    <main className="welcome">
      <h2>Welcome to EduCord.</h2>
      <h3><i>Discord, but just education.</i></h3>
      <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} />
      <p>Sign in with Google to chat with with your fellow EduCorders.</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
        />
      </button>
    </main>
  );
};

export default Welcome;
