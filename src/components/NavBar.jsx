import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import '../assets/styles/Components/NavBar.css'
import fox from '../assets/img/fox-arrow.png'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#/" >
          <img src={fox} width="280px" height="120px" className="d-inline-block align-top" alt="Fox logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
          <Nav className="navbar-style">
            <a href="#about" style={{margin: 'auto 50px', textDecoration:'none'}}  as={Link} >¿QUIÉNES SOMOS?</a>
            <Nav.Link style={{margin: 'auto 50px'}} className="black-text" href="#">NUESTRAS MARCAS</Nav.Link>
            <Nav.Link style={{margin: 'auto 50px'}} className="black-text" href='#/'>PRODUCTOS</Nav.Link>
            <Nav.Link style={{margin: 'auto 50px'}} className="black-text" href='#/'>CATEGORÍAS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar