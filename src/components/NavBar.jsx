import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";

import '../assets/styles/Components/NavBar.css'

const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#/">

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end " id="basic-navbar-nav">
          <Nav >
            <Nav.Link style={{margin: 'auto 15px'}} className="blue-text" href="#/">HOME</Nav.Link>
            <NavDropdown style={{margin: 'auto 15px'}} title="FEATURES" id="basic-nav-dropdown">
              <NavDropdown.Item href="#/">Responsive Layout Template</NavDropdown.Item>
              <NavDropdown.Item href="#/">SaaS Landing Page</NavDropdown.Item>
              <NavDropdown.Item href="#/">Smart BEM</NavDropdown.Item>
              <NavDropdown.Item href="#/">Multiple Unique Designs</NavDropdown.Item>
              <NavDropdown.Item href="#/">Flexible HTML</NavDropdown.Item>
              <NavDropdown.Item href="#/">User Friendly</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link style={{margin: 'auto 15px'}} href='#/'>PRICING</Nav.Link>
            <Nav.Link style={{margin: 'auto 15px'}}>CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default connect(null, null)(NavBar)