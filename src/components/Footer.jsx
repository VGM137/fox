import React from 'react'
import { connect } from 'react-redux'
import '../assets/styles/Components/Footer.css'
import wa from '../assets/static/img/whatsapp.png'
import mail from '../assets/static/img/mail.png'

const Footer = () => {

  return (
    <div className='footer-container'>
      <div className='footer-logo'>

      </div>
      <div className='footer-contact'>
        <h5>Contacto</h5>
        <ul>
          <li>UO FACTORY SHOP OUTLETS</li>
          <li>LEÓN - GTO</li>
          <li>BLVD. AEROPUERTO #841 l - 11 A</li>
          <li>COL: PREDIO DE SANTA ANITA</li>
          <li>CP: 37295</li>
          <li>
            <img src={wa} alt='whatsapp' />
            <p>477 - 761 - 19 - 71</p>
          </li>
          <li>
            <img src={mail} alt='e-mail' />
            <p>urban.outdoor.outlets@gmail.com</p>
          </li>
        </ul>
      </div>
      <div className='footer-menu'>
        <h5>Menú</h5>
        <ul>
          <li><a href='#about'>QUIÉNES SOMOS</a></li>
          <li><a href='#brands'>NUESTRAS MARCAS</a></li>
          <li><a href='#products'>PRODUCTOS</a></li>
          <li><a href='#blog'>BLOG</a></li>
        </ul>
      </div>
      <div className='footer-politics'>
        <h5>Políticas</h5>
        <ul>
          <li><a href='/politicas'>NOTICE OF PRIVACY</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer