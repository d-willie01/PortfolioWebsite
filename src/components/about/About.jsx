import React from 'react'
import './about.css'
import TempProfile from '../../assets/TempProfile.JPG'
import {GiBasketballBall} from 'react-icons/gi'
import {AiOutlineCodeSandbox} from 'react-icons/ai'
import {RiSuitcaseLine} from 'react-icons/ri'


const About = () => {
  return (
    <section id='about'>
     <h5>get to know...</h5>
     <h2>ME</h2>

     <div className='container about_container'>
      <div className='about_me'>
        <div className='about_me-image'>
          <img src={TempProfile} alt=''/>

        </div>

      </div>

      
      
      <div className='about_content'>
        <div className='about_cards'>
          
          
          <article className='about_card'>
            <GiBasketballBall className='about_icon'/>
            <h5>Athlete</h5>
            <small>15+ years playing all levels of basketball</small>

          </article>
          
          
          <article className='about_card'>
            <AiOutlineCodeSandbox className='about_icon'/>
            <h5>Programming Specialist</h5>
            <small>2+ years of coding in Phoenix, AZ</small>

          </article>
          
          
          <article className='about_card'>
            <RiSuitcaseLine className='about_icon'/>
            <h5>Entrepreneur</h5>
            <small>Mobile app generating revenue, as well as contract work and a FE</small>

          </article>


        </div>

        <p> Hello! my name is Darius Williams and I am currently a fullstack developer.
          In addition to coding, I love to play basketball and have played against every level and type of player
          there is! I am also a founder to a mobile app that not only generates revenue,
          but assists local organizations in their efforts to aquire genuine loyal customers! I do contract work for businesses
          as well to create websites and create other forms of income using software.
        </p>

        <a href='#contact' className='btn btn-primary'>Lets talk!</a>







      </div>





     </div>

    </section>
  )
}

export default About;