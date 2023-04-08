import React from "react";
import { connect } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import "../assets/styles/Components/Hero.css";
import bannerOne from '../assets/img/Banner-One.jpg'
import bannerTwo from '../assets/img/BannerTwo.jpg'


const Hero = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={bannerOne} alt="Banner-One"/>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img className="d-block w-100" src={bannerTwo} alt="Banner-Two" width="710px" height="533px"/>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item> */}
      {/* <Carousel.Item> */}
        {/* <img className="d-block w-100" src={bannerOne} alt="Banner-Three"/> */}
        {/* <Carousel.Caption></Carousel.Caption> */}
      {/* </Carousel.Item> */}
    </Carousel>
  );
};

export default Hero