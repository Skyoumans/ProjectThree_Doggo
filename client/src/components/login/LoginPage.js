import React, { Component } from 'react';
import axios from 'axios'
import SignupForm from './SignupForm.js'
import { Link } from 'react-router-dom'


class LoginPage extends Component {
  state = {
    owners: []
  }

  componentWillMount () {
    this.getAllOwners()
  }
  
  getAllOwners = async () => {
    try {
      const res = await axios.get('/api/owners')
      this.setState({owners: res.data})
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    return (
      <div>
        <h1>Log-In</h1>
        <h3>Please select your Username:</h3>
        {this.state.owners.map(owner => {
          return(<div><Link key={owner._id} to={`/owner/${owner._id}`}><img src={owner.image} alt='Profile' /></Link><br />{owner.userName}</div>)
          
        })}
        <h3>Don't have an account?</h3>
        <SignupForm />
      </div>
    );
  }
}

export default LoginPage;