import React, {useState} from "react";
import "./nav.css";
import {AiFillHome} from 'react-icons/ai'
import {IoMdContact} from 'react-icons/io'
import {AiFillProject} from 'react-icons/ai'
import {SiAboutdotme} from 'react-icons/si'
import { Link } from 'react-router-dom'



const Nav = () => {
  const [activeNav, setActiveNav] = useState('')


  return (
    <div >

      <nav>

        <Link to="/" onClick={() => setActiveNav('/')} className={activeNav === '/' ? 'active' : '/'}><AiFillHome  /> </Link>
        <Link to="/about" onClick={() => setActiveNav('/about')} className={activeNav === '/about' ? 'active' : ''}><IoMdContact  /> </Link>
        <Link to="/portfolio" onClick={() => setActiveNav('/portfolio')} className={activeNav === '/portfolio' ? 'active' : ''}><AiFillProject /></Link>
        <Link to="/contact" onClick={() => setActiveNav('/contact')} className={activeNav === '/contact' ? 'active' : ''}><SiAboutdotme /></Link>
        
      </nav>
    </div>
  );
};

export default Nav;
