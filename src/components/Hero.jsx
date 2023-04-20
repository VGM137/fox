import React from "react";
import { connect } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import "../assets/styles/Components/Hero.css";
import bannerOne from '../assets/static/img/Banner-One.jpg'
import bannerTwo from '../assets/static/img/Banner-Two.jpg'
import bannerThree from '../assets/static/img/Banner-Three.png'
import bannerFour from '../assets/static/img/Banner-Four.jpg'

const Hero = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img loading='lazy' className="d-block w-100" src={bannerOne} alt="Banner-One"/>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img loading='lazy' className="d-block w-100" src={bannerTwo} alt="Banner-Two"/>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img loading='lazy' className="d-block w-100" src={bannerThree} alt="Banner-Three"/>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img loading='lazy' className="d-block w-100" src={bannerFour} alt="Banner-Four"/>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero