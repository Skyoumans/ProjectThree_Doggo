import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class OwnerPage extends Component {
  render() {
    return (
      <div>
        <h1>Hello from the Owner Page</h1>
        <Link to={'/'}>Home</Link>
      </div>
    );
  }
}

export default OwnerPage;