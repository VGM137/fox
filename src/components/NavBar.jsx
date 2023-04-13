import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import '../assets/styles/Components/NavBar.css'
import fox from '../assets/static/img/fox-arrow.png'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#/" >
          <h1 style={{fontSize:'3em', color: 'red', textAlign: 'justify', marginLeft: '50px' }}>Outlet Store</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
          <Nav className="navbar-style">
            <img src={fox} width="380px" height="150px" className="d-inline-block align-top" alt="Fox logo"/>
            <a href="#about" style={{margin: 'auto 50px', textDecoration:'none'}}  as={Link} >¿QUIÉNES SOMOS?</a>
            <a href="#brands" style={{margin: 'auto 50px', textDecoration:'none'}} as={Link} >NUESTRAS MARCAS</a>
            <a href="#products" style={{margin: 'auto 50px', textDecoration:'none'}}  as={Link} >PRODUCTOS</a>
            <a href="#blog" style={{margin: 'auto 50px', textDecoration:'none'}} as={Link} >CATEGORÍAS</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;