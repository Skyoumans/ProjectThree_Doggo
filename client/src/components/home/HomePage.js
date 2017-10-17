import React, { Component } from 'react';
import axios from 'axios'

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
  render() {
    return (
      <div>
        <h1>List of Dogs</h1>
        {this.state.dogs.map(dog => {
          return(
            <div>
              <div>{dog.name}</div>
              <div><img src={dog.image} /></div>
            </div>
          )
        })}
      </div>
    )
  }
}
export default HomePage;