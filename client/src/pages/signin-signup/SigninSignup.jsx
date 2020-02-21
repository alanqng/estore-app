import React from 'react'
import Signin from '../../components/signin/Signin';
import Signup from '../../components/sign-up/Sign-up'
import './signin-signup.scss'
const SigninSignup = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <Signin/>
            <Signup/>
        </div>
    )
}

export default SigninSignup
