import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../assets/styles/Components/FoxSwiper.css";
import stamp from "../assets/static/products/hats/img412.jpg";

export default function FoxSwiper({title, folder}) {

  const [elHeight, setHeight] = useState(0);


  let needsMorePadding = folder === 'bags' || folder === 'buffs' || folder === 'tshirts' || folder === 'sandals'
  
  const sameHeight = () => {
    let imageWrapper = document.querySelector('.swiper-slide')
    if(imageWrapper){
      setHeight(parseFloat(imageWrapper.clientWidth))
    }
  }
  
  const images = {};
  const hiddenImages = {};
  const requireImages = require.context(`../assets/static/products`, true, /^\.\/.*$/);
  requireImages.keys().forEach((imageName) => {
    if(imageName.includes(folder)){
      if(!imageName.includes('img412')){
        if(imageName.includes('-')){
          hiddenImages[imageName] = requireImages(imageName); 
        }else{
          images[imageName] = requireImages(imageName); 
        }
      }
    }
  });

  const handleClick = (e) =>{
    let target = e.target.classList.contains('swiper-slide') ? e.target : e.target.closest('.swiper-slide')

    let hideImage = target.querySelector('.swiper-img')
    hideImage.classList.remove('swiper-img')
    hideImage.classList.add('swiper-back-img')
    let sibling = hideImage.nextElementSibling
    if(sibling){
      sibling.classList.add('swiper-img')
      sibling.classList.remove('swiper-back-img')
    }else{
      target.firstElementChild.classList.add('swiper-img')
      target.firstElementChild.classList.remove('swiper-back-img')
    }
  }

  const handleBlur = (e) => {
    let target = e.target.classList.contains('swiper-slide') ? e.target : e.target.closest('.swiper-slide')
    let hideImage = target.querySelector('.swiper-img')
    hideImage.classList.remove('swiper-img')
    hideImage.classList.add('swiper-back-img')
    target.firstElementChild.classList.remove('swiper-back-img')
    target.firstElementChild.classList.add('swiper-img')
  }


  useEffect(() => {
    sameHeight()

  }, [])


  return (
    <>
      <div className='swipper-title'>
        <h2>{title}</h2>
      </div>
      <Swiper
        slidesPerView={4}
        breakpoints={
          {
            320:
              {
                width: 320,
                slidesPerView: 2,
                spaceBetween: 15
              },
            425:
              {
                width: 425,
                slidesPerView: 2.5,
                spaceBetween: 20
              },
            768:
              {
                width: 768,
                slidesPerView: 4,
                spaceBetween: 20
              },
            1024:
              {
                width: 1024,
                slidesPerView: 5,
                spaceBetween: 20
              },
            1440:
              {
                width: 1440,
                slidesPerView: 5,
                spaceBetween: 20
              }
          }
        }
        centeredSlides={false}
        spaceBetween={25}
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={`fox-swipper ${folder}`}
      >
      {Object.keys(images).map((imageName, index) => (
        <SwiperSlide onMouseLeave={e => handleBlur(e)} onClick={e => handleClick(e)} style={{height: elHeight}} className={needsMorePadding && 'morePadding'} key={`${folder}-${index}-swiper`}>
          <img loading='lazy' className="swiper-img" key={`${folder}-${index}-image`} src={images[imageName]} alt={imageName} />
          {folder === 'hats' &&
            <img loading='lazy' className="swiper-back-img" key={`${folder}-${index}-image-hat`} src={stamp} alt={imageName} />
          }
          {Object.keys(hiddenImages).map((image, ii) => {
            let backImage = image.split('-', 1).join('')
            if(imageName.includes(backImage)) {
              return(
                <img loading='lazy' className="swiper-back-img" style={{padding: '0'}} key={`${folder}-${ii}-image-back`} src={hiddenImages[image]} alt={image} />
              )
            }
        })}
        </SwiperSlide>
      ))}
      </Swiper>

    </>
  );
}
