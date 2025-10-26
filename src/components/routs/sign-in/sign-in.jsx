import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase";
const signIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    // console.log(reponse);
    const serDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1> sign_in</h1>
      <button onClick={logGoogleUser}>sign in with google popup</button>
    </div>
  );
};

export default signIn;
