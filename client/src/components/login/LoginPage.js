import React, { Component } from 'react';
import axios from 'axios'
import SignupForm from './SignupForm.js'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const LogInStyles = styled.div`
  font-family: 'Varela Round', sans-serif;
  h1 {
    text-align: center;
    color: #4CAF50;

  }
  h3 {
    text-align: center;
  }
`
const ProfileStyles = styled.div`
  margin: 50px 125px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  img {
    border-radius: 50%
  }
`
const ProfileText = styled.div`
  text-align: center;
  font-family: 'Varela Round', sans-serif;
`




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
      <LogInStyles>
        <h1>Log In</h1>
        <h3>Please select an Owner</h3>
        <ProfileStyles>
        {this.state.owners.map(owner => {
          return(<ProfileText><Link key={owner._id} to={`/owner/${owner._id}`}><img src={owner.image} alt='Profile' /></Link><br />{owner.userName}</ProfileText>)
          
        })}
        </ProfileStyles>
        <h3>Don't have an account?</h3>
        <SignupForm />
      </LogInStyles>
    );
  }
}

export default LoginPage;