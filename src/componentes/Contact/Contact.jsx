import React, { Suspense } from 'react'
import './Contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { BsMessenger } from 'react-icons/bs'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import Contacto from '../../utils/Contacto'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from 'react-three-fiber'
import { Patricio } from '../../modelo/Patricio'
import Button from '@mui/joy/Button';



const Contact = () => {
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
          <div className='call-me'>
            <a href="mailto:jgar05202415@gmail.com">
              <Button className='contact__options'
                color="warning"
                disabled={false}
                onClick={function () { }}
                size="lg"
                variant="solid"> <AiOutlineMail /></Button>
            </a>
            <a href="https://m.me/daviid.grz">
              <Button className='contact__options'
                color="warning"
                disabled={false}
                onClick={function () { }}
                size="lg"
                variant="solid"> <BsMessenger /></Button>
            </a>
            <a href="https://api.whatsapp.com/send?phone=2462136643">
              <Button className='contact__options'
                color="warning"
                disabled={false}
                onClick={function () { }}
                size="lg"
                variant="solid"> <AiOutlineWhatsApp /></Button>

            </a>
          </div>
      
      </div>
      <div>

        <div className='cnct'>
          <Contacto className="ctt2"/>

          
        </div>

      </div>




    </div>
    // <>
    //   <h2>Contact Me</h2><br />
    //   <div className='contenedor'>
    //     <Contacto />
    //     <section id='contact' className='contact'>


    //       <div className='container contact__container' >
    //         <div className='contact__options'>
    //           <a href="mailto:jgar05202415@gmail.com">
    //             <article className='contact__option' data-aos="fade-up-left">
    //               <AiOutlineMail className='contact__option-icon' />
    //               <h4>Email</h4>
    //               <h5>jgar05202415@gmail.com</h5>
    //               <h5> Send a message</h5>
    //             </article >
    //           </a>
    //           <a href="https://m.me/daviid.grz">
    //             <article className='contact__option' data-aos="fade-up-left">
    //               <BsMessenger className='contact__option-icon' />
    //               <h4>Message</h4>
    //               <h5>Daviid G</h5>
    //               <h5> Send a message</h5>
    //             </article>
    //           </a>
    //           <a href="https://api.whatsapp.com/send?phone=2462136643">
    //             <article className='contact__option' data-aos="fade-up-left">
    //               <AiOutlineWhatsApp className='contact__option-icon' />
    //               <h4>Whatsapp</h4>
    //               <h5>2462136643</h5>
    //               <h5> Send a message</h5>
    //             </article>
    //           </a>
    //         </div>
    //       </div>

    //     </section>
    //   </div>
    // </>
  )
}

export default Contact