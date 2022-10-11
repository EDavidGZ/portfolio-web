import React from 'react'
import './Contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { BsMessenger } from 'react-icons/bs'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import Contacto from '../../utils/Contacto'

const Contact = () => {
  return (
    <>
      <h2>Contact Me</h2><br />
      <div className='contenedor'>
        <Contacto />
        <section id='contact' className='contact'>


          <div className='container contact__container' >
            <div className='contact__options'>
              <a href="mailto:jgar05202415@gmail.com">
                <article className='contact__option' data-aos="fade-up-left">
                  <AiOutlineMail className='contact__option-icon' />
                  <h4>Email</h4>
                  <h5>jgar05202415@gmail.com</h5>
                  <h5> Send a message</h5>
                </article >
              </a>
              <a href="https://m.me/daviid.grz">
                <article className='contact__option' data-aos="fade-up-left">
                  <BsMessenger className='contact__option-icon' />
                  <h4>Message</h4>
                  <h5>Daviid G</h5>
                  <h5> Send a message</h5>
                </article>
              </a>
              <a href="https://api.whatsapp.com/send?phone=2462136643">
                <article className='contact__option' data-aos="fade-up-left">
                  <AiOutlineWhatsApp className='contact__option-icon' />
                  <h4>Whatsapp</h4>
                  <h5>2462136643</h5>
                  <h5> Send a message</h5>
                </article>
              </a>
            </div>
          </div>

        </section>
      </div>
    </>
  )
}

export default Contact