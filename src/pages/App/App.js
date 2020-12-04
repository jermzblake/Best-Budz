import React, { Component } from 'react';
import './App.css';
//import React Routes
import { Route } from 'react-router-dom';
// import Pages
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';

class App extends Component {

  render(){
    return (
      <div className="App">
        <header className="">

        </header>
        <Route path='/login' component={LoginPage} />
        <Route path='/signup' component={SignupPage} />
      </div>
    );
  }
}

export default App;
