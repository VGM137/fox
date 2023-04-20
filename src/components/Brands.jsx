import React from "react";
import { connect } from "react-redux";
import "../assets/styles/Components/Brands.css";
// import logo from '../assets/static/img/fox-logo.png'
import logos from '../assets/static/img/logos.png'
import allbrands from '../assets/static/img/allbrands.jpg'

const Brands = () => {
  return (
    <div id="brands" className="brands-container">
      <div>
        <img loading='lazy' className="img-fluid" src={logos}/>
        <img loading='lazy' className="img-fluid" src={allbrands}/>
      </div>
      <div>
        <h1>Nuestras Marcas</h1>
        <p>
          Nuestra capacidad de producción nos ha permitido estar trabajando de forma diversa en distintos productos para distintos sectores, desde un ambiente deportivo, casual y outdoor. La audiencia y la constancia conla que contamos, nos ha permitido tener un amplio público de mercado y siempre ofreciendo el mejor producto en tus manos. Gracias a nuestros desarrollos, tenemos para ofrecerte el mejor servicio y rendimiento, siempre pendientes de todos nuestros usuarios.
        </p>
      </div>
    </div>
  );
};

export default Brands;
