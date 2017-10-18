import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router'
import styled from 'styled-components'

const FormStyles = styled.div`
  form {
    text-align: center;
  }
  input {
    width: 50%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
  button {
    background-color: #4CAF50;
    color: #FAEBD7;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    width: 50%;
  }
  h1 {
    text-align: center;
    color: #4CAF50;
  }
`

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
      return <Redirect to={`login`} />
    }
    return (
      <FormStyles>
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
      </FormStyles>
    );
  }
}

export default SignupForm;