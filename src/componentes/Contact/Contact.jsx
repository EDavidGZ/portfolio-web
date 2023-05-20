import React, { Suspense } from 'react'
import './Contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { BsMessenger } from 'react-icons/bs'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import Contacto from '../../utils/Contacto'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from 'react-three-fiber'
import { Patricio } from '../../modelo/Patricio'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'



const Contact = () => {

  const urls = [
    {url: "mailto:jgar05202415@gmail.com", logo:  <AiOutlineMail />, css: "url1"},
    {url: "https://m.me/daviid.grz", logo:  <BsMessenger />, css: "url2"},
    {url: "https://api.whatsapp.com/send?phone=2462136643", logo:  <AiOutlineWhatsApp />, css: "url3"},
    {url: "https://github.com/EDavidGZ/porfolio.github.io", logo:  <AiFillGithub />, css: "url4"},
    {url: "https://www.instagram.com/daviid_1308/", logo:  <AiFillInstagram />, css: "url5"},
    {url: "https://www.linkedin.com/in/efren-garza-9344b1238/", logo:  <AiFillLinkedin />, css: "url6"},
  ]

  return (
    <div className='contact'>
      <div className='shark' >
        <Canvas camera={{ zoom: 2, position: [25, 8, -35] }} >
          <ambientLight intensity={0.3} />
          <pointLight position={[-15, 25, 10]} intensity={0.2} />
          <pointLight position={[-55, 55, 0]} intensity={0.4} />
          <Suspense fallback={null}>
            <Patricio />

          </Suspense>
          <OrbitControls />
        </Canvas>
          <div className='call-me'>{
            urls.map(value => (
              <article key={value.url}>

              <a href={value.url} className={value.css}>
              {value.logo}
             </a>
              </article>
            ))
          }
          </div>
      
      </div>
      <div>

        <div className='cnct'>
          <Contacto className="ctt2"/>

          
        </div>

      </div>




    </div>

  )
}

export default Contact