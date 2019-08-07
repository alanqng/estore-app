import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import { Route, Switch } from 'react-router-dom'
import Hats from './pages/hats/Hats'

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/hats' component={Hats}/>  
    </Switch>
    </div>
  );
}

export default App;
