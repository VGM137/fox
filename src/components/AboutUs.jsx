import React from "react";
import { connect } from "react-redux";
import "../assets/styles/Components/AboutUs.css";
import shoeOne from "../assets/static/img/shoeOne.png";

const AboutUs = () => {
  return (
    <div id="about" className="about-container">
      <div>
        <h1>¿QUIÉNES SOMOS?</h1>
        <p>
          Somos una empresa mexicana dedicada desde 1970, a la fabricación y comercialización de productos de calzado de la marca FOX, de la más alta calidad. Por más de 50 años, hemos evolucionado y expandido nuestros productos a vestuario, vestuario deportivo y demás accesorios enfocados al deporte, con los más altos niveles de calidad, modernidad y seguridad, siempre con el objetivo de satisfacer las necesidades del público consumidor mexicano. Al adquirir nuestros productos de la marca FOX, tendrás plena garantía y certeza de que estás adquiriendo la más alta calidad y vanguardia de una marca registrada, oficial y legítima a nivel nacional.
        </p>
      </div>
      <img loading='lazy' className="img-fluid" src={shoeOne}/>
    </div>
  );
};

export default AboutUs;
