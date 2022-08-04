import React from 'react'
import './Portfolio.css'
import Encrip from "../../img/encrip.png";
import Vyc from "../../img/vyc.png";
import Note from "../../img/note.png";
import Car from "../../img/car.png";
import Clima from "../../img/clima.png";


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h1>My Recent Work</h1>
      <h2>Portfolio</h2>

      <div className='portfolio1'>

      <article className='card2'>
        <img src={Encrip} alt="" className='img-port'/>
        <div className='bot'>
          <a href="https://edavidgz.github.io/challengeonecodificador2/">
            <button className='button1'>to go</button>  
          </a>
          <a href="https://github.com/EDavidGZ/challengeonecodificador2">
            <button className='button1'>github</button>  
          </a>

        </div>


      </article>

      <article className='card2'>
          <img src={Vyc} alt="" className='img-port'/>
          <div className='bot'>

          <a href="https://aluminioscharly.herokuapp.com/">
            <button className='button1'>to go</button>
          </a>
          <a href="https://github.com/EDavidGZ/charlyventanas">
            <button className='button1'>github</button>
          </a>

          </div>



      </article>
      <article className='card2'>
          <img src={Clima} alt="" className='img-port'/>
          <div className='bot'>

          <a href="https://edavidgz.github.io/clima/">
            <button className='button1'>to go</button>
          </a>
          <a href="https://github.com/EDavidGZ/clima">
            <button className='button1'>github</button>
          </a>

          </div>



      </article>

      <article className='card2'>
          <img src={Note} alt="" className='img-port'/>

          <div className='bot'>
          <a href="https://peliculasfront.herokuapp.com/">
            <button className='button1'>to go</button>
          </a>
          <a href="https://github.com/EDavidGZ/peliculas">
            <button className='button1'>github</button>
          </a>


          </div>


      </article>

      <article className='card2'>
          <img src={Car} alt="" className='img-port' />
          <div className='bot'>

          <a href="https://carrito-react.herokuapp.com/">
            <button className='button1'>to go</button>
          </a>
          <a href="https://github.com/EDavidGZ/Carrito_React">
            <button className='button1'>github</button>
          </a>

          </div>


      </article>

      </div>
    </section>
  )
}

export default Portfolio