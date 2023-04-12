import React from 'react';
import '../assets/styles/Components/Blog.css'
import articles from '../assets/static/img/articles.png'
import mask from '../assets/static/img/mask-2023.png'
import backPacks from '../assets/static/img/backPacks.png'


const Blog = () => {
  return (
    <div id="blog" className='blog-container'>
      <h2>Blog</h2>
      <h1>A través de los años</h1>
      <p>
        <img class="img-fluid" src={mask}/>
        Este año 2023 no puedes perderte los íncreibles<br/> productos
        que Fox Outlet México tiene para ti.<br/> Ven a visitarnos a 
        tu distribuidor más cercano, <br/>con íncreibles precios que no te puedes perder.<br/>
        Productos desde morrales, mochilas,<br/> sneakers, todo para tu excursión<br/> o día 
        de campo.<br/> Ofreciéndote los mejores modelos de buffs<br/> pasamontañas de este 2023
      </p>
      <hr/>
      <p>
        <img class="img-fluid" src={backPacks} style={{float: 'left'}}/>
        En este 2022, gracias a todos ustedes seguimos<br/>
        avanzando y trabajando. Traemos productos<br/> de la mejor calidad y ahora con más variedad<br/> que nunca.
        No pierdas de vista nuestras<br/> nuevas backpacks.<br/>
        Ven a visitarnos este regreso a clases con las<br/> mochilas que tenemos preparadas para ti,
        con<br/> los mejores diseños y la mejor clase, no te lo pierdas.
      </p>
      <hr/>
      <p>
        <img class="img-fluid" src={articles}/>
        Fox Outlet de México, empresa orgullosamente mexicana,<br/>
        trae materiales de la mejor calidad este 2021<br/> para desarrollar productos de altos estándares.<br/> 
        Ofrecemos un (Life Style) mediante nuestra gama de vestuario,<br/> calzado y
        accesorios de la vestimenta tanto para la vida<br/> cotidiana, como para el
        outdoor.<br/>
        Hoy más que nunca regresamos equipados para ofrecerte<br/> una alta gama
        de artículos...
      </p>
      <hr/>
      {/* <img class="img-fluid" src={articles}/> */}
      <p>
        Prepárate este 2020 lleno de nuevos productos<br/> y emociones,
        además de que no puedes perderte<br/> SAPICA, que tendrá acontecimiento en
        León Guanajuato.<br/>
        Estaremos muy contentos de recibirte y
        mostarte todo<br/> nuestro catálogo.
      </p>
    </div>
     
  );
};

export default Blog;