import React from 'react'
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {AiOutlineWhatsApp} from 'react-icons/ai'

const Contact = () => {
  return (
    <section id='contact' className='contact'>
      
       <h2>Contact Me</h2>
      
      
     <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
          <AiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>jgar05202415@gmail.com</h5>
            <a href="mailto:jgar05202415@gmail.com">Send a message</a>
          </article >
          <article className='contact__option'>
          <BsMessenger className='contact__option-icon'/>
            <h4>Message</h4>
            <h5>Daviid G</h5>
            <a href="https://m.me/daviid.grz">Send a message</a>
          </article>
          <article className='contact__option'>
          <AiOutlineWhatsApp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>2462136643</h5>
            <a href="https://api.whatsapp.com/send?phone=2462136643">Send a message</a>
          </article>
        </div>
      </div>

    </section>
  )
}

export default Contact