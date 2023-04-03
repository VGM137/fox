import React from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import '../assets/styles/Components/Hero.css'

const Hero = () => {
  return(
    <>
      <Container style={{height: 'auto'}} className='row justify-content-center m-auto p-10 hero-container'>
       
      </Container>
    </>
  )
}

export default connect(null, null)(Hero);
