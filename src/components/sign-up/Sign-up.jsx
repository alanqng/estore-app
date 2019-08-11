import React from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.scss'
export default class Signup extends React.Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmedPassword: ''
  };

  handleSubmit = async e => {
    const { password, confirmedPassword, displayName, email } = this.state;
    e.preventDefault();

    if (password !== confirmedPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmedPassword: ''
      });
    } catch (e) {
      console.log(e);
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({[name]: value})
  };
  render() {
      const {displayName, email, password, confirmedPassword} = this.state
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            required
            label="Display Name"
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            required
            label="Email"
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            required
            label="Password"
          />
          <FormInput
            type="password"
            name="confirmedPassword"
            value={confirmedPassword}
            onChange={this.handleChange}
            required
            label="Confirm Password"
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}
