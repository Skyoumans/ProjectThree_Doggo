import React, { Component } from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <NavBar />
       <h1>Hello World</h1>
      </div>
      </Router>
      
    );
  }
}

export default App;
