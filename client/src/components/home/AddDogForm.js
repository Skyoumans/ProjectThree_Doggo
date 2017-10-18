import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

const FormStyles = styled.div`
form {
  text-align: center;
  margin: 30px 300px 30px 100px;
  
  
}
input {
  width: 225%;
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
  width: 225%;
}
h1 {
  text-align: center;
  color: #4CAF50;
}
`

class AddDogForm extends Component {
  state = {
    newDog: {
      name: '',
      age: '',
      weight: '',
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

  handleDelete = async (event) => {
    event.preventDefault()
    this.props.deleteDog(this.state.dog)
  }


  render() {
    if (this.state.redirectToOwner) {
      return <Redirect to={`/owners/${this.state.newOwnerId}/home`} />
    }
    return (
      <FormStyles>
        <h1>Post Your Dog</h1>
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
      </FormStyles>
    );
  }
}

export default AddDogForm;