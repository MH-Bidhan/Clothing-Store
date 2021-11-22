import React from "react";
import { signInWithGoogle } from "./../../utils/firebase/firebase.utils";
import CustomButton from "./../custom-button/custom-button.component";
import FormInput from "./../form-input/form-input.component";
import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const email = "";
    const password = "";

    this.setState({
      email,
      password,
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            required
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
            required
          />

          <div className="button-group">
            <CustomButton label="Sign in" onSubmit={this.handleSubmit} />
            <CustomButton
              customClasses="google-sign-in"
              label="Sign in With Google"
              onClick={signInWithGoogle}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
