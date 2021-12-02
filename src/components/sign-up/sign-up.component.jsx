import { createUserWithEmailAndPassword } from "@firebase/auth";
import React from "react";
import {
  auth,
  createUserProfileDocument,
} from "./../../utils/firebase/firebase.utils";
import CustomButton from "./../custom-button/custom-button.component";
import FormInput from "./../form-input/form-input.component";
import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    const { password, confirmPassword } = this.state;

    e.preventDefault();

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }
    try {
      const { displayName, email, password } = this.state;
      const user = await createUserWithEmailAndPassword(auth, email, password);

      createUserProfileDocument(user, displayName);

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            onChange={this.handleChange}
            label="Display Name"
            type="text"
            name="displayName"
            value={displayName}
          />
          <FormInput
            onChange={this.handleChange}
            label="Email"
            type="email"
            name="email"
            value={email}
          />
          <FormInput
            onChange={this.handleChange}
            label="Password"
            type="password"
            name="password"
            value={password}
          />
          <FormInput
            onChange={this.handleChange}
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
          />
          <CustomButton label="Sign up" />
        </form>
      </div>
    );
  }
}

export default SignUp;
