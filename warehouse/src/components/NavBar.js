import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="/">Your Warehouse</Navbar.Brand>
      <Nav className="mr-auto">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/beanies">Beanies</Link>
        <Link className="link" to="/gloves">Gloves</Link>
        <Link className="link" to="/facemasks">Facemasks</Link>
      </Nav>
    </Navbar>
  )
}

export default NavBar