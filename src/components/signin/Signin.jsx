import React, { Component } from 'react';
import FormInput from '../form-input/FormInput';
import './signin.scss'
import CustomButton from '../custom-button/CustomButton';
// import {signInWithGoogle, auth} from '../../firebase/firebase.utils'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'
import { connect } from 'react-redux';

class Signin extends Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { emailSignInStart } = this.props
    const { email, password} = this.state
    emailSignInStart(email, password)
    // try {
    //   await auth.signInWithEmailAndPassword(email, password)
    //   this.setState({ email: '', password: '' });
    // } catch (error) {
    //   console.log(error)
    // }
    
    console.log(event);
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props
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
            <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn> Sign in with Google </CustomButton>
          </div>
          
        </form>
      </div>
    );
  }
}

const mapDistpatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password})),
})

export default connect(null, mapDistpatchToProps)(Signin)