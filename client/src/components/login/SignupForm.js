import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router'

class SignupForm extends Component {
  state = {
    newOwner: {
      name: '',
      userName: '',
      password: '',
      memberSince: Date.now,
      image: ''
    },
    redirectToOwner: false,
    newOwnerId: ''
  }

  handleChange = (event) => {
    const attribute = event.target.name
    const updateOwner = {...this.state.newOwner}
    updateOwner[attribute] = event.target.value
    this.setState({newOwner: updateOwner})
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const res = await axios.post('/api/owners', {
      'owner': this.state.newOwner
    })
    this.setState({redirectToOwner: true, newOwnerId: res.data._id})
  }


  render() {
    if (this.state.redirectToOwner) {
      return <Redirect to={`/owners/${this.state.newOwnerId}/home`} />
    }
    return (
      <div>
        <h1>Sign-Up for Doggo</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input onChange={this.handleChange} name='name' type='text' value={this.state.newOwner.name} placeholder="Name" />
          </div>
          <div>
            <input onChange={this.handleChange} name='userName' type='text' value={this.state.newOwner.userName} placeholder='Desired Username'/>
          </div>
          <div>
            <input onChange={this.handleChange} name='password' type='password' value={this.state.newOwner.password} placeholder='Password' />
          </div>
          <div>
            <input onChange={this.handleChange}name='image' type='text' value={this.state.newOwner.image} placeholder='Profile Image URL'/>
          </div>
          <button>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignupForm;