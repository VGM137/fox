import React from 'react';
import '../assets/styles/Components/Blog.css'
import newYear from '../assets/static/img/newyears.png'
import stars from '../assets/static/img/tenis-stars.png'
import red from '../assets/static/img/tenisrojos.png'
import sapica from '../assets/static/img/sapica.png'
import casual from '../assets/static/img/casual.png'
import sport from '../assets/static/img/sport.png'
import hollyweek from '../assets/static/img/hollyweek.png'
import heb from '../assets/static/img/heb.png'
import holidays from '../assets/static/img/holidays.png'
import show from '../assets/static/img/show.jpg'
import mercado from '../assets/static/img/mercado.jpg'
import zapatoFox from '../assets/static/img/msi.png'
import invitacion from '../assets/static/img/invitacion2019.jpg'
import foxbrands from '../assets/static/img/foxbrands.jpg'
import f from '../assets/static/img/f.jpg'
import reacciona from '../assets/static/img/reacciona.jpg'
import claro2018 from '../assets/static/img/claro2018.jpg'
import claro2017 from '../assets/static/img/claro2017.jpg'
import buenfin2017 from '../assets/static/img/buenfin2017.jpg'
import gorras from '../assets/static/img/gorras.jpg'
import littleStars from '../assets/static/img/estrellitas.png'



const Blog = () => {
  return (
    <div id="blog" className='blog-container'>
      <h2>Blog</h2>
      <h1>A través de los años</h1>

    {/* 2023 */}
      <div>
        <p>¿Estos días de descanso por que no relajarnos un poco?, Prepara tus rutas y disfruta de esta semana Santa aprovechando al máximo.</p>
        <img loading='lazy' className="img-fluid" src={hollyweek}/>
      </div>

    {/* 2022 */}
      <div>
        <p>Estamos de vuelta para desearles el mayor de los exitos este 2022 a todos ustedes y les tenemos nuevos productos como siempre con la mejor de intención de atenderlos.</p>
        <img loading='lazy' className="img-fluid" src={newYear}/>
      </div>
      <div>
        <p>Cómodo, bonito y barato.<br /> Modelo ESTRELLITAS ¿como te verías con uno de estos? <br />#tenis #tenisparamujer #tenisparahombre #foxmr #tenisfox #beclever #marcandoestilos</p>
        <img loading='lazy' className="img-fluid" src={littleStars}/>
      </div>
      <div>
        <p className='heb'>Ven a visitarnos este regreso a clases con las mochilas que tenemos preparadas para ti, con los mejores diseños y la mejor clase, no te lo pierdas.</p>
        <a href="https://www.heb.com.mx/fox?_q=fox&amp;map=ft" target='_blank'>Ver productos en HEB</a>
        <img loading='lazy' className="img-fluid" src={heb}/>
      </div>
      <div>
        <p>¿Por qué Fox Outlet de México tiene los mejores productos al mejor precio?, recuerda que por ser una marca 100% orgullosamente mexicana siempre tratamos de dar el mejor servicio a nuestros clientes y llevando el diseño mas adecuado para todos nuestros usuarios, no olvides venir a conocer nuestra nueva linea de ropa outdoor para todos los fanaticos de Fox Outlet.</p>
        <img loading='lazy' className="img-fluid" src={stars}/>
      </div>

    {/* 2021 */}
      <div>
        <p>¿Ya viste?, estamos ahora en Mercado Libre, listos para llevarte el producto que estas buscando hasta la puerta de tu casa, no olvides estas promociones que no puedes perderte, estaremos encantados de darte garantía y calidad en todos los productos, desde mochilas, playeras, zapatos, entre otros muchos más.</p>
        <img loading='lazy' className="img-fluid" src={mercado}/>
      </div>
      <div>
        <p>Diferentes caras misma esencia. &#128526; <br /> Muy pronto gran venta de liquidación en todos nuestros modelos.&#128561;&#128561;&#128561;</p>
        <img loading='lazy' className="img-fluid" src={foxbrands}/>
      </div>
      <div>
        <p>Estamos listos para arrancar este 2021 con nuestros productos de vestimenta outdoor, presentamos nuestra linea de zapatos FOX, el estilo y calidad nunca se habían visto mejor juntos. Te presentamos la nueva línea de Tenis Fox tipo en cualquier color que busques o también en distintas versiones como, select Arcoiris.</p>
        <img loading='lazy' className="img-fluid" src={casual}/>
      </div>
      <div>
        <p>Nuestros nuevos zapatos linea varial estan aquí para darte a tu alcance la mayor comodidad combinando la moda, diseño y el mejor confort con nuestra suela especial para todos aquellos amantes del deporte.</p>
        <img loading='lazy' className="img-fluid" src={red}/>
      </div>
      <div>
        <p>Nos despedimos muy agradecidos con todos ustedes, esperemos tengan unas excelentes fiestas navideñas y seguimos compartiendo historias junto a todos ustedes.</p>
        <img loading='lazy' className="img-fluid" src={holidays}/>
      </div>
      <div>
        <p>¡FIN de temporada y Fox Outlet lo sabe!, aprovecha descuentos irreales de hasta el 50%, Promociones válidad del 6 al 24 de Abril.</p>
        <img loading='lazy' className="img-fluid" src={show}/>
      </div>

    {/* 2020 */}
      <div>
        <p>Prepárate con este año lleno de nuevos productos y emociones, además de que no puedes perderte SAPICA que tendrá acontecimiento en León Guanajuato, estaremos muy contentos de recibirte y mostarte todo nuestro catalogo. </p>
        <img loading='lazy' className="img-fluid" src={sapica}/>
      </div>
      <div>
        <p>FOX Outlelt de México empresa orgullosamente mexicana trae para ti los materiales de la mejor calidad con los régimenes más altos para deporte de senderismo, motocross, ciclismo de montaña, etc. Hoy más que nunca regresa equipado y disfruta de nuestra alta variedad de productos.</p>
        <img loading='lazy' className="img-fluid" src={sport}/>
      </div>

    {/* 2019 */}
      <div>
        <p>¡Aprovecha los meses sin intereses que tenemos para ti!</p>
        <img loading='lazy' className="img-fluid" src={zapatoFox}/>
      </div>
      <div>
        <p>¡No más espera! <br />¡Nuevas Colecciones y promociones! <br />Los esperamos &#128095; <br /> #SapicaAgosto2019</p>
        <img loading='lazy' className="img-fluid" src={invitacion}/>
      </div>

    {/* 2018 */}
      <div>
        <p>¿Cuál es tu estilo? <br />Fox #BeClever</p>
        <img loading='lazy' className="img-fluid" src={f}/>
      </div>
      <div>
        <p>FOX #BECLEVER <br />¡Reacciona, comparte y comenta!</p>
        <img loading='lazy' className="img-fluid" src={reacciona}/>
      </div>
      <div>
        <p className='heb'>&#128526; Aprovecha nuestros ÚLTIMOS DÍAS de DESCUENTO en éste y más modelos solo en:</p>
        <a href='https://www.claroshop.com/Tienda/10181/Fox/'>&#128073; CLARO SHOP &#128072;</a>
        <img loading='lazy' className="img-fluid" src={claro2018}/>
      </div>

    {/* 2017 */}
      <div>
        <p className='heb'>¡Aprovecha nuestra promo para festejar a todos los papás! &#x1F98A; <br /></p>
        <span>Entra ahora a: &#128073;<a href='http://www.claroshop.com/tienda/10009/'>CLARO SHOP</a></span>
        <img loading='lazy' className="img-fluid" src={claro2017}/>
      </div>
      <div>
        <p className='heb'><span>¡¡Buen Fin en Fox!! <br /> ¡Aprovecha este súper descuento con Claro Shop! </span></p>
        <span>¡Entra aquí: <a href='https://www.claroshop.com/Tienda/10009/'>CLARO SHOP</a> y llévatelos!</span>
        <img loading='lazy' className="img-fluid" src={buenfin2017}/>
      </div>
      <div>
        <p className='heb'><span className='heb'>¡¡GORRAS A SOLO $260 + ENVIO GRATIS!!</span></p>
        <p className='heb'>¡Aprovecha este Buen Fin con Fox!</p>
        <span>Entra al link y llévate la tuya <br /><a href=' https://ropa.mercadolibre.com.mx/_Tienda_fox-mr'>FOX Mercado Libre</a></span>
        <img loading='lazy' className="img-fluid" src={gorras}/>
      </div>
      
    </div>
     
  );
};

export default Blog;