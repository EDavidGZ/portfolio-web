import React from 'react'
import './Footer.css'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'


const Footer = () => {
  return (
      <footer className='footer' >

        <div className='icons-a'>
          <a href="https://github.com/EDavidGZ/porfolio.github.io"  className='i'><AiFillGithub /></a>
          <a href="https://www.linkedin.com/in/efren-garza-9344b1238/"><AiFillLinkedin /></a>
          <a href="https://www.instagram.com/daviid_1308/"><AiFillInstagram /></a>

        </div>

      </footer>
  )
}

export default Footer