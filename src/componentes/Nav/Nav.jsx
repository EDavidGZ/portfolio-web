import React, {useState} from "react";
import "./nav.css";
import {AiFillHome} from 'react-icons/ai'
import {IoMdContact} from 'react-icons/io'
import {AiFillProject} from 'react-icons/ai'
import {SiAboutdotme} from 'react-icons/si'



const Nav = () => {
  const [activeNav, setActiveNav] = useState('')


  return (
    <div >

      <nav>

        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome  /></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><IoMdContact /></a>
        <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiFillProject /></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><SiAboutdotme /></a>
        
      </nav>
    </div>
  );
};

export default Nav;
