import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class AddDogForm extends Component {
  state = {
    newDog: {
      name: '',
      age: 0,
      weight: 0,
      fur: '',
      gender: '',
      location: '',
      image: ''
    },
    redirectToOwner: false,
    newDogId: ''
  }

  handleChange = (event) => {
    const attribute = event.target.name
    const updateDog = {...this.state.newDog}
    updateDog[attribute] = event.target.value
    this.setState({newDog: updateDog})
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    this.props.createDog(this.state.newDog)
  }

  render() {
    if (this.state.redirectToOwner) {
      return <Redirect to={`/owners/${this.state.newOwnerId}/home`} />
    }
    return (
      <div>
        <h1>Post Your Dog For Adoption</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input onChange={this.handleChange} name='name' type='text' value={this.state.newDog.name} placeholder='Name' />
          </div>
          <div>
            <input onChange={this.handleChange} name='age' type='number' value={this.state.newDog.age} placeholder='Age' />
          </div>
          <div>
            <input onChange={this.handleChange} name='weight' type='number' value={this.state.newDog.weight} placeholder='Weight' />
          </div>
          <div>
            <input onChange={this.handleChange} name='fur' type='text' value={this.state.newDog.fur} placeholder='Fur Color' />
          </div>
          <div>
            <input onChange={this.handleChange} name='gender' type='text' value={this.state.newDog.gender} placeholder='Gender' />
          </div>
          <div>
            <input onChange={this.handleChange} name='image' type='text' value={this.state.newDog.image} placeholder='Image URL' />
          </div>
          <button>Add Dog</button>
        </form>
      </div>
    );
  }
}

export default AddDogForm;