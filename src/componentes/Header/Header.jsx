import React from 'react'
import './header.css'
import me from '../../img/efren.png'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

const Header = () => {
  return (
    <section id='header' className='contenedor'>

      <div className='primary'>
        <div className='l'>
          <span className="border">Hy! I Am</span>
          <span className="wave">Hy! I Am</span>
        </div>
        <h3>Efren Garza</h3>
        <h5>Creative web developer</h5>
        <a href="#contact" className='button i-button'>Hire me</a>

        <div className='icons-a'>
          <a href="https://github.com/EDavidGZ/porfolio.github.io"  className='i'><AiFillGithub /></a>
          <a href="https://www.linkedin.com/in/efren-garza-9344b1238/"><AiFillLinkedin /></a>
          <a href="https://www.instagram.com/daviid_1308/"><AiFillInstagram /></a>

        </div>

      </div>


    
      <div>
       
      <div>
            <div className="about__me">
                <div className="about__me-image">
                   <img src={me} alt="" className='me '/>
                </div>
            </div>
        </div>
        
      
      </div>
    </section>
  )
}

export default Header