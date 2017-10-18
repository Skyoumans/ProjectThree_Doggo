import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBarBG = styled.div`
  background-color: #333;
  overflow: hidden;
`
const NavBarLink = styled.div`
  a, h1 {
    float: left;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #f2f2f2;
    align-items: center;
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

`

const NavBar = () => {
  return (
    <NavBarBG>
      <NavBarLink>
        <Link to="/">Doggo</Link>
        <Link to="/login">LogIn</Link>
      </NavBarLink>
    </NavBarBG>
  )
}

export default NavBar
