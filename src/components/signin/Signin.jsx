import React, { Component } from 'react';
import FormInput from '../form-input/FormInput';
import './signin.scss'
import CustomButton from '../custom-button/CustomButton';
import {signInWithGoogle} from '../../firebase/firebase.utils'
export default class Signin extends Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
    console.log(event);
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            type="email"
            name="email"
            value={this.state.email}
            label="Email"
            required
          />

          <FormInput
            handleChange={this.handleChange}
            type="password"
            name="password"
            value={this.state.password}
            label="Password"
            required
          />
          <div className='buttons'>
            <CustomButton type="submit"> Submit </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>
          </div>
          
        </form>
      </div>
    );
  }
}
