import React, { Suspense} from 'react'
import './Portfolio.css'
import Vyc from "../../img/vyc.png";
import Note from "../../img/note.png";
import Clima from "../../img/clima.png";
import { OrbitControls } from '@react-three/drei'
import { Canvas } from 'react-three-fiber'
import { Room } from '../../modelo/Room';
import { Swiper, SwiperSlide } from "swiper/react";
import Button from '@mui/joy/Button';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper";



const Portfolio = () => {
  const urls = [
    { title: 'ShoStore', about: 'Node, React, Js, Css, firabase and some libraries. ', img: 'https://firebasestorage.googleapis.com/v0/b/shoesstore-97a8f.appspot.com/o/catalogo.png?alt=media&token=1668712a-4540-4bec-b210-e3046ae304a0 ', url: "https://shoe-store-garza-zacamolpa.vercel.app/" },
    { title: 'Notas', about: 'React, Js, Css and some librari', img: Note, url: "https://listaworks.herokuapp.com/" },
    { title: 'Vidrios y aluminios', about: 'Html, Css and Js', img: Vyc, url: "https://aluminioscharly.herokuapp.com/" },
    { title: 'Clima', about: 'HTML, CSS, JS', img: Clima, url: "https://edavidgz.github.io/clima/" }
  ]
  return (
    <div>
      
        <div className='bodyPort'  >
          <Canvas camera={{ zoom: 3, position: [10, 10, -26] }} >
            <ambientLight intensity={0.5} />
            <pointLight position={[35, 35, 10]} intensity={1} />
            <pointLight position={[-35, 35, 0]} intensity={0.4} />
            <Suspense fallback={null}>
              <Room />

            </Suspense>
            <OrbitControls />
          </Canvas>


        </div>
      <div className='cardptf'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          className="mySwiper"
        >
          {urls.map((jobs) => (
            <SwiperSlide key={jobs.title}>
              <h1>{jobs.title}</h1>
              <img src={jobs.img} alt={jobs.title} />
              <p className='about-text'>{jobs.about}</p>
              <Button

                color="warning"
                disabled={false}
                onClick={function () { }}
                size="sm"
                variant="soft"> <a href={jobs.url}>learn more...</a></Button>

            </SwiperSlide>


          ))}
        </Swiper>
      </div>
    </div>

  )
}

export default Portfolio