import React from "react";
import './Portfolio.css'
import carlos from "../../img/carlos.png";
import store from "../../img/store.png";
import Clima from "../../img/clima.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";




const Portfolio = () => {
  const urls = [
    { title: 'Carlos-account', about: 'Node, React, Js, Css, Html and some libraries. ', img: carlos, url: "https://carlos-account.vercel.app/", css: "cardptf" },
    { title: 'Shoe-Store', about: 'Node, React, Js, Css, firabase and some libraries. ', img: store, url: "https://shoe-store-garza-zacamolpa.vercel.app/", css: "cardptf2" },
    { title: 'Weather', about: 'Node, React, Js, Css, firabase and some libraries. ', img: Clima, url: "https://edavidgz.github.io/clima/", css: "cardptf3" },
  ]
  return (
    <div   className='bodyPort' >
      
      
      <div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        loop={true}
        modules={[EffectCards]}
        className="mySwiper"
      > {urls.map((jobs) => (
        <SwiperSlide key={jobs.title} >
          <div className={jobs.css}>

          <div style={{margin: "2rem", marginLeft:"3rem"}}>
          <h3 style={{fontSize: "3rem", fontFamily: "cursive"}}>{jobs.title}</h3><br /><br />
         
         <p style={{fontSize: "1rem", fontFamily: "cursive"}}>{jobs.about}</p>

          </div>
          <a href={jobs.url} > <img src={jobs.img} alt={jobs.title} /></a>
          </div>

        </SwiperSlide>


      ))}
       

      </Swiper>
      </div>
    </div>

  )
}

export default Portfolio