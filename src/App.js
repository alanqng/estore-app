import React, { useState, useEffect } from 'react';
import HomePage from './pages/homepage/homepage.component'
import { Route, Switch } from 'react-router-dom'
import Shop from './pages/shop/Shop';
import './App.css';
import Header from './components/header/Header';
import SigninSignup from './pages/signin-signup/SigninSignup';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions'
function App(props) {
  const {setCurrentUser} = props
  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      console.log(userAuth)
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }
      setCurrentUser(userAuth)
      // setCurrentUser(user)
      // createUserProfileDocument(user)
    } )
    return () => {
      unsubscribeFromAuth()
    };
  }, [])

  return (
    <div className="App">
    <Header/>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={Shop}/>
      <Route exact path='/signin' component={SigninSignup}/>   
    </Switch>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
