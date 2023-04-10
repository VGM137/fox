import React from 'react'
import { connect } from 'react-redux'
import '../assets/styles/Components/AboutUs.css'
import shoeOne from '../assets/static/img/shoeOne.jpg'

const AboutUs = () => {

  return (
    <div id="about" className='container'>
        <h1 className='title'>¿QUIÉNES SOMOS?</h1>
        {/* <img className="rounded float-end" src={shoeOne} /> */}
        <p className='paragraph'>
          Somos una empresa mexicana dedicada desde 1970, a la fabricación<br/>
          y comercialización de productos de calzado de la marca FOX, de la<br/> más alta calidad.
          Por más de 50 años, hemos evolucionado y expandido<br/> nuestros productos
          de vestuario, vestuario deportivo y demás accesorios<br/> enfocados al deporte,
          con los más altos niveles de calidad, modernidad y<br/> seguridad, siempre
          con el objetivo de satisfacer las necesidades del público<br/> consumidor
          meixcano.<br/>
          Al adquirir nuestros productos de la marca FOX, tendrás plena
          garantía<br/> y certeza de que estás adquiriendo la más alta calidad y vanguardia
          de una<br/> marca registrada, oficial y legítima a nivel nacional.
        </p>
    </div>
  )
}

export default AboutUs