import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import { Route, Switch } from 'react-router-dom'
import Shop from './pages/shop/Shop';
import './App.css';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
    <Header/>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={Shop}/>  
    </Switch>
    </div>
  );
}

export default App;
