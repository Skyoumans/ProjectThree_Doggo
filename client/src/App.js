import React, { Component } from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import OwnerPage from './components/owner/OwnerPage.js'
import LoginPage from './components/login/LoginPage.js'
import HomePage from './components/home/HomePage.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/owner/:id' component={HomePage} />
        </Switch>
      </div>
      </Router>
      
    );
  }
}

export default App;
