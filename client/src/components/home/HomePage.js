import React, { Component } from 'react';
import axios from 'axios'
import AddDogForm from './AddDogForm.js'
import EditOwner from './EditOwner.js'
import styled from 'styled-components'

const FormDirection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0px 200px 0px 200px;
`

const DoggyPic = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;

  img {
    border-radius: 50%
  }
  h5 {
    text-align: center;
    font-family: 'Varela Round', sans-serif;    

  }
  button {
    background-color: #4CAF50;
    color: #FAEBD7;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    width: 100%;
    font-family: 'Varela Round', sans-serif;    
  }
`



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
        <h1>List of Dogs</h1>
        <DoggyPic>
          {this.state.dogs.map(dog => {
            return(
              <div>
                <div><img src={dog.image} alt='Dog Pic'/></div>
                <h5>{dog.name}</h5>
                <h5>{dog.age}</h5>
                <h5>{dog.weight}</h5>
                <h5>{dog.fur}</h5>
                <h5>{dog.gender}</h5>

                <button onClick={() => this.deleteDog(dog._id)}>Delete Dog</button>                        
              </div>
            )
          })}
        </DoggyPic>
        <FormDirection>
          <EditOwner 
          ownerId={this.props.match.params.id}/>
          <AddDogForm 
          createDog={this.createDog}/>
        </FormDirection>
      </div>
        

    )
  }
}
export default HomePage;