import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/movies-logo.png'

function AppHeader() {
  return (
    <Navbar bg='dark' variant=''>
      <Navbar.Brand
        as={({ className }) => {
          return (
            <Link to='/' 
              className={className}
            >
              <img src={logo} alt=""/>
            </Link>
          )
        }}
      />
      <Nav className='mr-auto'>
        <Nav.Link as={({ className }) => (
          <NavLink to='/' className={className} activeClassName={`font-weight-bold`}>
            Home
          </NavLink>
        )}/>
        <Nav.Link as={({ className }) => (
          <NavLink to='/movies' className={className} activeClassName={`font-weight-bold`}>
            Movies
          </NavLink>
        )}/>
        <Nav.Link as={({ className }) => (
          <NavLink to='/tv-shows' className={className} activeClassName={`font-weight-bold`}>
            TV Shows
          </NavLink>
        )}/>
      </Nav>
    </Navbar>
  )
}

export default AppHeader
