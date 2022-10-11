import React from 'react'
import './Portfolio.css'
import Vyc from "../../img/vyc.png";
import Note from "../../img/note.png";
import Clima from "../../img/clima.png";


const Portfolio = () => {
  const urls = [
    {title: 'ShoStore', about: 'Se realiza en el framework React. Tienda de zapatos.', img: 'https://firebasestorage.googleapis.com/v0/b/shoesstore-97a8f.appspot.com/o/catalogo.png?alt=media&token=1668712a-4540-4bec-b210-e3046ae304a0 ', url: "https://shoe-store-garza-zacamolpa.vercel.app/" },
    {title: 'Notas', about: 'Se realiza en el framework React. Se utiliza local host para guardar los datos ingresados.', img: Note, url: "https://listaworks.herokuapp.com/" },
    {title: 'Vidrios y aluminios', about: 'Pagina de contacto para compra de ventans y puertas', img: Vyc, url: "https://aluminioscharly.herokuapp.com/" },
    {title: 'Clima', about: 'Consulta el clima mediante una API para traer los datos de clima dependiendo la ubicacion', img: Clima, url: "https://edavidgz.github.io/clima/" }
  ]
  return (
    <div id='portfolio'>
      <h1>My Recent Work</h1>
      <h2>Portfolio</h2>

      <div className='portfolio1'>
        {urls.map((jobs) => (
          <div key={jobs.url} data-aos="zoom-in-down">
            <a href={jobs.url} className='card2'>
              <img src={jobs.img} alt="" className='img-port' />
              <div className='bot'>
                <h6 className='title3'>{jobs.title}</h6>
                <p className='about3'>{jobs.about}</p>
              </div>


            </a>
          </div>
        )
        )}

      </div>
    </div>
  )
}

export default Portfolio