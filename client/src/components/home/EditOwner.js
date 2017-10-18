import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'


class EditOwner extends Component {
  state = {
    editedOwner: {
      name: '',
      userName: '',
      password: '',
      memberSince: '',
      image: '',
    },
    redirectToLoginPage: false,
    newOwnerEdited: ''
  }

  handleChange = (event) => {
    const attribute = event.target.name
    const updateTheOwner = {...this.state.editedOwner}
    updateTheOwner[attribute] = event.target.value
    this.setState({ editedOwner: updateTheOwner })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const newOwnerEdited = this.state.editedOwner._id
    const res = await axios.patch(`/api/owners/${this.props.ownerId}`, {
      'owner': this.state.editedOwner
    })
    this.setState({redirectToLoginPage: true, newOwnerEdited: res.data._id})
  }

  render() {
    if (this.state.redirectToLoginPage) {
      return <Redirect to={`/login`} />
    }
    return (
      <div>
        <h1>Edit Owner Info</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input onChange={this.handleChange} name='name' type='text' value={this.state.editedOwner.name} placeholder="Name" />
          </div>
          <div>
            <input onChange={this.handleChange} name='userName' type='text' value={this.state.editedOwner.userName} placeholder='Desired Username'/>
          </div>
          <div>
            <input onChange={this.handleChange} name='password' type='password' value={this.state.editedOwner.password} placeholder='Password' />
          </div>
          <div>
            <input onChange={this.handleChange}name='image' type='text' value={this.state.editedOwner.image} placeholder='Profile Image URL'/>
          </div>
          <button>Submit Updated Owner</button>
        </form>
      </div>
    );
  }
}

export default EditOwner;