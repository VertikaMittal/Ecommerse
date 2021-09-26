import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import Home from './containers/Home';
import Signup from './containers/Signup';
import Signin from './containers/Signin';



function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Signin" component={Signin} />
      </Switch>
    </Router>
      
          </div>
  );
}

export default App;
