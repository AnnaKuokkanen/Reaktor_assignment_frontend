import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
      <Navbar bg="light" variant="light" fixed="bottom">
        <Navbar.Brand>Reaktor summer 2021 pre-assignment by Anna Kuokkanen</Navbar.Brand>
        <Nav.Link href="https://github.com/AnnaKuokkanen/Reaktor_assignment_backend">Backend repo</Nav.Link>
        <Nav.Link href="https://github.com/AnnaKuokkanen/Reaktor_assignment_frontend">Frontend repo</Nav.Link>
      </Navbar>
    </div>
  )
}

export default Footer