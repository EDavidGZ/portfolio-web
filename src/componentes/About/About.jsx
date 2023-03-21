import React, { Suspense } from 'react'
import './About.css'
import Resume from './Cv.pdf';
import { SiPython } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { TbBrandJavascript } from 'react-icons/tb'
import { FaJava } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
import { SiPostgresql } from 'react-icons/si'
import { SiGoland } from 'react-icons/si'
import RobotDance from '../../modelo/RobotDance'
import Button from '@mui/joy/Button';




const About = () => {
  const skills = [
    { id: 1, obj: <SiPython /> },
    { id: 2, obj: <FaReact /> },
    { id: 3, obj: <TbBrandJavascript /> },
    { id: 4, obj: <FaJava /> },
    { id: 5, obj: <FaNodeJs /> },
    { id: 6, obj: <GrMysql /> },
    { id: 7, obj: <SiPostgresql /> },
    { id: 8, obj: <SiGoland /> },
    { id: 9, obj: "more.." },
  ]
  console.log(skills)

  return (
    <section className='container-about'>

      <div className='sub-container-about'>
        <div>
          <h3 className='titleRbt'>About Me</h3>
          <h5 className='text'>With experience in different programming languages ​​and frameworks.</h5>
          <h5 className='text'>I love chess and play with my princess</h5>
          <a href={Resume} download >
            <Button
              color="warning"
              onClick={function () { }}
              variant="soft"
            >Download CV</Button>
          </a>


        </div>
        <RobotDance />
      </div>


      <div>
        <div className='cardfloting ' >
          {
            skills.map(skill => {
              return (

                <a className='color ' key={skill.id}
                >{skill.obj}</a>
              )
            })
          }
        </div>
      </div>

    </section>
  )
}

export default About