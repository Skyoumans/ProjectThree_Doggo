import React, { Component } from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import OwnerPage from './components/owner/OwnerPage.js'
import LoginPage from './components/login/LoginPage.js'
import HomePage from './components/home/HomePage.js'
import styled from 'styled-components'

const AppStyles = styled.div`
  background-color: #FAEBD7
`

class App extends Component {
  render() {
    return (
      <Router>
        <AppStyles>
        <NavBar />
        <Switch>
        <Route exact path='/' component={OwnerPage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/owner/:id' component={HomePage} />
        </Switch>
      </AppStyles>
      </Router>
      
    );
  }
}

export default App;
