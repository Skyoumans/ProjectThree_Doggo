import React, { Component } from 'react';
import axios from 'axios'
import AddDogForm from './AddDogForm'

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

  render() {
    return (
      <div>
        <div>
          <h1>List of Dogs</h1>
          {this.state.dogs.map(dog => {
            return(
              <div>
                <div>{dog.name}</div>
                <div><img src={dog.image} /></div> 
                <button>Delete Dog</button>                        
              </div>
            )
          })}
        </div>

          <AddDogForm createDog={this.createDog} />
        </div>
    )
  }
}
export default HomePage;