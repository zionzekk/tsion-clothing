import React from "react";
import SignUpForm from "../../sign-up-form/sign-up-form";
import {
  auth,
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase";

const signIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    // console.log(reponse);
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1> sign_in</h1>
      <button onClick={logGoogleUser}>sign in with google popup</button>
      <SignUpForm />
    </div>
  );
};

export default signIn;
