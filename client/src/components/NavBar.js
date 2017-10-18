import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBarBG = styled.div`
  background-color: #333;
  overflow: hidden;
`
const NavBarLink = styled.div`
  a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    font-weight: bold;
    text-transform: uppercase;
  }
  a:hover {
    background-color: #ddd;
    color: black;
  }
  h1 {
    float: right;
    display: block;
    color: #f2f2f2;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    font-weight: bold;
    text-transform: uppercase;

  }
`

const NavBar = () => {
  return (
    <NavBarBG>
      <NavBarLink>
        <Link to="/">Home</Link>
        <Link to="/login">LogIn</Link>
        <h1>Doggo</h1>
      </NavBarLink>
    </NavBarBG>
  )
}

export default NavBar
