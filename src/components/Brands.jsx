import React from "react";
import { connect } from "react-redux";
import "../assets/styles/Components/Brands.css";
// import logo from '../assets/static/img/foxsquare.png'
import logo from '../assets/static/img/foxsquare.png'
import arcticFox from '../assets/static/img/arctic_fox.png'
import grayFox from '../assets/static/img/gray_fox.png'
import redFox from '../assets/static/img/red_fox.png'
import allbrands from '../assets/static/img/allbrands.jpg'

const Brands = () => {
  return (
    <div id="brands" className="brands-container">
      <div className="brands-logos_container">
        <div>
          <img loading='lazy' className="img-fluid square-logo" src={logo}/>
        </div>
        <div className="brands-plane__logos">
          <img loading='lazy' className="img-fluid" src={arcticFox}/>•
          <img loading='lazy' className="img-fluid" src={grayFox}/>•
          <img loading='lazy' className="img-fluid" src={redFox}/>
        </div>
        <div>
          <img loading='lazy' className="img-fluid seven-logos" src={allbrands}/>
        </div>
      </div>
      <div>
        <h1>Nuestras Marcas</h1>
        <p>
          Nuestra capacidad de producción nos ha permitido estar trabajando de forma diversa en distintos productos para distintos sectores, desde un ambiente deportivo, casual y outdoor. La audiencia y la constancia con la que contamos, nos ha permitido tener un amplio público de mercado y siempre ofreciendo el mejor producto en tus manos. Gracias a nuestros desarrollos, tenemos para ofrecerte el mejor servicio y rendimiento, siempre pendientes de todos nuestros usuarios.
        </p>
      </div>
    </div>
  );
};

export default Brands;
