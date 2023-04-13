import React from "react";
import { connect } from "react-redux";
import "../assets/styles/Components/Brands.css";
// import logo from '../assets/static/img/fox-logo.png'
import logos from '../assets/static/img/logos.png'

const Brands = () => {
  return (
    <div id="brands" className="brands-container">
      <img class="img-fluid" src={logos}/>
      <p>
        <h1>Nuestras Marcas</h1>
        Nuestra capacidad de producción nos ha permitido estar trabajando
        <br />
        de forma diversa en distintos productos para distintos sectores, desde
        <br />un ambiente deportivo, casual y outdoor. La audiencia y la constancia
        con<br />la que contamos, nos ha permitido tener un amplio público de mercado y<br />
        siempre ofreciendo el mejor producto en tus manos. Gracias a nuestros<br />
        desarrollos, tenemos para ofrecerte el mejor servicio y rendimiento,<br />
        siempre pendientes de todos nuestros usuarios.
      </p>
    </div>
  );
};

export default Brands;
