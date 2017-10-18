import React, { Component } from 'react';
import axios from 'axios'
import AddDogForm from './AddDogForm.js'
import EditOwner from './EditOwner.js'
import styled from 'styled-components'



class HomePage extends Component {
  state = {
    dogs: []
  }
  componentWillMount () {
    this.getAllDogs()
  }

  getAllDogs = async () => {
    try {
      const ownerId = this.props.match.params.id
      const res = await axios.get(`/api/owners/${ownerId}/home`)
      this.setState({dogs: res.data})
    } catch (error) {
      console.log(error)
    }
  }

  createDog = async (newDog) => {
    const ownerId = this.props.match.params.id    
    const res = await axios.post(`/api/owners/${ownerId}/home`, {
      'dog': newDog
    })
    console.log(res)

    this.setState({dogs: res.data.dog})
  }

  deleteDog = async (dogId) => {
    const ownerId = this.props.match.params.id
    const id = dogId
    const res = await axios.delete(`/api/owners/${ownerId}/home/${id}`)
    this.setState({dogs: res.data.dog})
  }

  render() {
    return (
      <div>
        <div>
          <EditOwner ownerId={this.props.match.params.id}/>
          <h1>List of Dogs</h1>
          {this.state.dogs.map(dog => {
            return(
              <div>
                <div><img src={dog.image} alt='Dog Pic'/></div>
                <div>{dog.name}</div>
                <button onClick={() => this.deleteDog(dog._id)}>Delete Dog</button>                        
              </div>
            )
          })}
        </div>

          <AddDogForm 
          createDog={this.createDog}
          
           />
        </div>
    )
  }
}
export default HomePage;