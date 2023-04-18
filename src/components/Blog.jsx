import React from 'react';
import '../assets/styles/Components/Blog.css'
import enduro from '../assets/static/img/enduro.png'
import newYear from '../assets/static/img/newyear.png'
import backPacks from '../assets/static/img/backPacks.png'
import stars from '../assets/static/img/tenis-stars.png'
import hanging from '../assets/static/img/hanging.png'
import colors from '../assets/static/img/teniscolors.png'
import red from '../assets/static/img/tenisrojos.png'
import truck from '../assets/static/img/truck.png'
import bannerOne from '../assets/static/img/Banner-One.jpg'
import bike from '../assets/static/img/bike.png'
import sapica from '../assets/static/img/sapica.png'
import casual from '../assets/static/img/casual.png'
import sport from '../assets/static/img/sport.png'
import hollyweek from '../assets/static/img/hollyweek.png'
import heb from '../assets/static/img/HEB.png'
import holidays from '../assets/static/img/holidays.png'
import show from '../assets/static/img/show.jpg'
import mercado from '../assets/static/img/mercado.jpg'



const Blog = () => {
  return (
    <div id="blog" className='blog-container'>
      <h2>Blog</h2>
      <h1>A través de los años</h1>

      <div>
        <p>¿Estos días de descanso por que no relajarnos un poco?, Prepara tus rutas y disfruta de esta semana Santa aprovechando al máximo.</p>
        <img className="img-fluid" src={hollyweek}/>
      </div>

      <div>
        <p>Estamos de vuelta para desearles el mayor de los exitos este 2022 a todos ustedes y les tenemos nuevos productos como siempre con la mejor de intención de atenderlos.</p>
        <img className="img-fluid" src={newYear}/>
      </div>
      <div>
        <p>Ven a visitarnos este regreso a clases con las mochilas que tenemos preparadas para ti, con los mejores diseños y la mejor clase, no te lo pierdas.</p>
        <img className="img-fluid" src={heb}/>
      </div>
      <div>
        <p>¿Por qué Fox Outlet de México tiene los mejores productos al mejor precio?, recuerda que por ser una marca 100% orgullosamente mexicana siempre tratamos de dar el mejor servicio a nuestros clientes y llevando el diseño mas adecuado para todos nuestros usuarios, no olvides venir a conocer nuestra nueva linea de ropa outdoor para todos los fanaticos de Fox Outlet.</p>
        <img className="img-fluid" src={stars}/>
      </div>

      <div>
        <p>Estamos listos para arrancar este 2021 con nuestros productos de vestimenta outdoor, presentamos nuestra linea de zapatos FOX, el estilo y calidad nunca se habían visto mejor juntos. Te presentamos la nueva línea de Tenis Fox tipo en cualquier color que busques o también en distintas versiones como, select Arcoiris.</p>
        <img className="img-fluid" src={casual}/>
      </div>
      <div>
        <p>Nuestros nuevos zapatos linea varial estan aquí para darte a tu alcance la mayor comodidad combinando la moda, diseño y el mejor confort con nuestra suela especial para todos aquellos amantes del deporte.</p>
        <img className="img-fluid" src={red}/>
      </div>
      <div>
        <p>Nos despedimos muy agradecidos con todos ustedes, esperemos tengan unas excelentes fiestas navideñas y seguimos compartiendo historias junto a todos ustedes.</p>
        <img className="img-fluid" src={holidays}/>
      </div>
      <div>
        <p>¡FIN de temporada y Fox Outlet lo sabe!, aprovecha descuentos irreales de hasta el 50%, Promociones válidad del 6 al 24 de Abril.</p>
        <img className="img-fluid" src={show}/>
      </div>
      <div>
        <p>¿Ya viste?, estamos ahora en Mercado Libre, listos para llevarte el producto que estas buscando hasta la puerta de tu casa, no olvides estas promociones que no puedes perderte, estaremos encantados de darte garantía y calidad en todos los productos, desde mochilas, playeras, zapatos, entre otros muchos más.</p>
        <img className="img-fluid" src={mercado}/>
      </div>

      <div>
        <p>Prepárate con este año lleno de nuevos productos y emociones, además de que no puedes perderte SAPICA que tendrá acontecimiento en León Guanajuato, estaremos muy contentos de recibirte y mostarte todo nuestro catalogo. </p>
        <img className="img-fluid" src={sapica}/>
      </div>
      <div>
        <p>FOX Outlelt de México empresa orgullosamente mexicana trae para ti los materiales de la mejor calidad con los régimenes más altos para deporte de senderismo, motocross, ciclismo de montaña, etc. Hoy más que nunca regresa equipado y disfruta de nuestra alta variedad de productos.</p>
        <img className="img-fluid" src={sport}/>
      </div>

    </div>
     
  );
};

export default Blog;