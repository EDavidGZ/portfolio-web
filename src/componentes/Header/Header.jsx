import React, { Suspense } from 'react'
import './header.css'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { Canvas } from 'react-three-fiber'
import { Palmera } from '../../modelo/Palmera'
import { OrbitControls } from '@react-three/drei'
import { Sun } from '../../modelo/Sun'
import { Cloud } from '../../modelo/Cloud'
import Button from '@mui/joy/Button';
import { Link } from 'react-router-dom'



const Header = () => {
  //comprimir
  //gltf-pipeline -i scene.gltf -o palmera.gltf --draco.compressionLevel=10

  //covertir a jsx
  //npx gltfjsx palmera.gltf

  return (
    <div className='container-heigth'>
      <div className='container-weather '>
        <div className='container-weather '>
          <div className='sol'>
            <Canvas camera={{ zoom: 2.5, position: [5, -15, 22] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[35, 35, 0]} intensity={1} />
              <pointLight position={[-35, 35, 0]} intensity={0.4} />
              <Suspense fallback={null}>
                <Cloud />

              </Suspense>
              <OrbitControls />
            </Canvas>
          </div>
          <div className='sol'>
            <Canvas camera={{ zoom: 2.5, position: [-3, -15, -25] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[35, 35, 0]} intensity={1} />
              <pointLight position={[-35, 35, 0]} intensity={0.4} />
              <Suspense fallback={null}>
                <Cloud />

              </Suspense>
              <OrbitControls />
            </Canvas>
          </div>

        </div>
        <div className='sol'>
          <Canvas camera={{ zoom: 10, position: [1, 20, 15] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[35, 35, 0]} intensity={0.9} />
            <pointLight position={[-35, 35, 0]} intensity={0.4} />
            <Suspense fallback={null}>
              <Sun />

            </Suspense>
            <OrbitControls />
          </Canvas>

        </div>

      </div>

      <section className='container-header'>
        <div className='ct-one' data-aos="fade-right">
          <div className='ct-center'>
            <span className="wave2">Hy! I Am</span>
            <span className="wave">Hy! I Am</span>
          </div>
          <h3 className='tl-header'>Efren Garza</h3>
          <h5 className='subtl'>Creative web developer</h5>
          <Button
            color="warning"
            disabled={false}
            onClick={function () { }}
            size="lg"
            variant="solid">
            <Link to="/contact" >contact me</Link></Button>

          <div className='icons-a'>
            <a href="https://github.com/EDavidGZ/porfolio.github.io" ><AiFillGithub /></a>
            <a href="https://www.linkedin.com/in/efren-garza-9344b1238/"><AiFillLinkedin /></a>
            <a href="https://www.instagram.com/daviid_1308/"><AiFillInstagram /></a>

          </div>

        </div>

        <div className='container-header'>
          <div className='palmera'>
            <Canvas camera={{ zoom: 1.5, position: [10, 25, -30] }}>
              <ambientLight intensity={.8} />
              <pointLight position={[35, 35, 0]} intensity={0.4} />
              <pointLight position={[-35, 35, 0]} intensity={0.4} />
              <Suspense fallback={null}>
                <Palmera />

              </Suspense>
              <OrbitControls />
            </Canvas>

          </div>

          <div className='palmera'>

          </div>

        </div>

      </section>
    </div>

  )
}

export default Header