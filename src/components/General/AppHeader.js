import React from 'react';
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/movies-logo.png'

function AppHeader() {
  return (
    <Navbar bg='dark'>
      <Navbar.Brand
        href='/'
      >
        <img src={logo} alt=""/>
      </Navbar.Brand>
    </Navbar>
  )
}

export default AppHeader
