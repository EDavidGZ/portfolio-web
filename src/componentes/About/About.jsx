import React from 'react'
import './About.css'
import Resume from './cv.profesional.pdf';
import {BsFront} from 'react-icons/bs'
import {AiFillCodepenCircle} from 'react-icons/ai'
import {BiCheck} from 'react-icons/bi'


const About = () => {
  return (
    <section id='about' className='content'>

      <div className='awes'>
        <h1 className='sub'>My Awesome</h1>
        <h2 className='sub2'> services</h2>
        <h5 className='sub3'>With experience in different programming languages ​​and frameworks.</h5>


        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
      </div>

      <div className='content1'>

          <article className='card'>
            <BsFront className='card-icon' />
            <div className='sk'>
              <h6><BiCheck />    HTML</h6>
              <h6><BiCheck />    CSS</h6>
              <h6><BiCheck />    Boostrap</h6>
              <h6><BiCheck />    Jquery</h6>
              <h6><BiCheck />    JavaScript</h6>
              <h6><BiCheck />    React</h6>
            </div>
          </article>

          <article className='card'>
            <AiFillCodepenCircle className='card-icon' />
            <div className='sk'>
              <h6><BiCheck />    SQL</h6>
              <h6><BiCheck />    php</h6>
              <h6><BiCheck />    Nodejs</h6>
              <h6><BiCheck />    Python</h6>
            </div>
          </article>

      </div>
    

    </section>
  )
}

export default About