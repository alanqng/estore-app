import React, { useState, useEffect } from 'react';
import HomePage from './pages/homepage/homepage.component'
import { Route, Switch } from 'react-router-dom'
import Shop from './pages/shop/Shop';
import './App.css';
import Header from './components/header/Header';
import SigninSignup from './pages/signin-signup/SigninSignup';
import { auth } from './firebase/firebase.utils'
function App() {
  const [ currentUser, setCurrentUser ] = useState(null);
  
  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      console.log(currentUser)
    } )
    return () => {
      unsubscribeFromAuth()
    };
  }, [currentUser])
  return (
    <div className="App">
    <Header currentUser={currentUser}/>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={Shop}/>
      <Route exact path='/signin' component={SigninSignup}/>   
    </Switch>
    </div>
  );
}

export default App;
