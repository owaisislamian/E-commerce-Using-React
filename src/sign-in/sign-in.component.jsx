import React from "react";
import CustomButton from "../component/custom-button/custom-button.component";
import FormInput from "../component/form-input/form-input.component";
import { signInWithGoogle } from "../firebase/firebase.utils";
import "./sign-in.styles.scss";


class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: "", password: "" });

  };

handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I Already have an Account</h2>
        <span>Sign in with your Email & Password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
};

export default SignIn;
