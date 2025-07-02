import React from 'react'
import './about.css'
import PFP from '../../assets/PFP.jpg'
import {GiBasketballBall} from 'react-icons/gi'
import {AiOutlineCodeSandbox} from 'react-icons/ai'
import {RiSuitcaseLine} from 'react-icons/ri'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={PFP} alt='Darius Williams'/>
          </div>
        </div>
        
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <GiBasketballBall className='about_icon'/>
              <h5>Athlete</h5>
              <small>15+ years playing basketball at all levels</small>
            </article>
            
            <article className='about_card'>
              <AiOutlineCodeSandbox className='about_icon'/>
              <h5>Fullstack Developer</h5>
              <small>4+ years building scalable applications</small>
            </article>
            
            <article className='about_card'>
              <RiSuitcaseLine className='about_icon'/>
              <h5>Technical Intern</h5>
              <small>Currently at Carvana, supporting infrastructure</small>
            </article>
          </div>

          <p>
            Resourceful Fullstack Developer with 4+ years of experience building scalable applications, 
            automating workflows, and supporting infrastructure. Proficient in JavaScript, Python, React, 
            and CI/CD practices. Adept at reducing inefficiencies, streamlining deployments, and delivering 
            intuitive user experiences. Currently completing a B.S. in Bioinformatics at Arizona State University 
            with a focus on data science and software systems.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk!</a>
        </div>
      </div>
    </section>
  )
}

export default About;