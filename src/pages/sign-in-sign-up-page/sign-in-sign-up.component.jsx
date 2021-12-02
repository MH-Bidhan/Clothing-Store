import React from "react";
import SignUp from "../../components/sign-up/sign-up.component";
import SignIn from "./../../components/sign-in/sign-in.component";
import "./sign-in-sign-up.styles.scss";

const SignInSignUpPage = () => {
  return (
    <div className="signin-signup-page">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUpPage;
