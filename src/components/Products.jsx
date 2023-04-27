import React from 'react';
import FoxSwiper from './FoxSwiper';
import '../assets/styles/Components/Products.css'

const Products = () => {
  return (
    <div id='products' className='products-container'>
      <div className='products-title'>
        <h2>Productos</h2>
      </div>
      <div className='products-swipers'>
        <FoxSwiper title={'Gorras'} folder={'hats'} />
        <FoxSwiper title={'Pasamontañas'} folder={'buffs'} />
        <FoxSwiper title={'Morrales'} folder={'bags'} />
        <FoxSwiper title={'Calzado deportivo'} folder={'shoes'} />
        <FoxSwiper title={'Mochilas'} folder={'bagpacks'} />
        <FoxSwiper title={'Playeras'} folder={'longSlivesShirts'} />
        <FoxSwiper title={'Sandalias'} folder={'sandals'} />
        <FoxSwiper title={'Shorts'} folder={'shorts'} />
        <FoxSwiper title={'Playeras'} folder={'tshirts'} />
        <FoxSwiper title={'Calzado casual'} folder={'casual'} />
      </div>
    </div>
  );
};

export default Products;