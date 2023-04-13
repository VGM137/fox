import React from "react";
import { connect } from "react-redux";
import "../assets/styles/Components/AboutUs.css";
import shoeOne from "../assets/static/img/shoeOne.png";

const AboutUs = () => {
  return (
    <div id="about" className="about-container">
      <img class="img-fluid" src={shoeOne}/>
      <p>
        <h1>¿QUIÉNES SOMOS?</h1>
        Somos una empresa mexicana dedicada desde 1970, a la fabricación
        <br />
        y comercialización de productos de calzado de la marca FOX, de la
        <br /> más alta calidad. Por más de 50 años, hemos evolucionado y
        expandido<br /> nuestros productos de vestuario, vestuario deportivo y demás
        accesorios<br /> enfocados al deporte, con los más altos niveles de calidad,
        modernidad y<br /> seguridad, siempre con el objetivo de satisfacer las
        necesidades del público<br /> consumidor mexicano.<br /> Al adquirir nuestros productos de la marca FOX,
        tendrás plena garantía<br />
        y certeza de que estás adquiriendo la más alta calidad y vanguardia de
        una<br /> marca registrada, oficial y legítima a nivel nacional.
      </p>
      <hr/>
    </div>
  );
};

export default AboutUs;
