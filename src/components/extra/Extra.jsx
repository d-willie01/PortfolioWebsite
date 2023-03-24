import React from 'react';
import './extra.css';
import {AiOutlineCheck} from 'react-icons/ai'
import Hike1 from "../../assets/Hike1.jpeg"
import Dunk from '../../assets/Dunk.mp4';
import Accomplishment from '../../assets/Accomplishment.jpeg'


const Extra = () => {
  return (
    <section id='extra'>
        <h5>My Life....</h5>
        <h2>Activities</h2>


        <div className='container services_container'>
          <article className='service'>

              <div className='service_head'>
              <h3>Hiking</h3>

              <img src={Hike1} />



              </div>

              <ul className='service_list'>
                <li>
                  <AiOutlineCheck className='service_list-icon'/>
                  <p>Love for outdoors and nature</p>
                </li>
                <li>
                  <AiOutlineCheck className='service_list-icon'/>
                  <p>River rafting</p>
                </li>
                <li>
                  <AiOutlineCheck className='service_list-icon'/>
                  <p>Enjoying peace and calm</p>
                </li>

              </ul>






          </article>




          <article className='service'>

              <div className='service_head'>


              <h3>Basketball</h3>
              <video controls
                    src={Dunk}/>



              </div>

              <ul className='service_list'>
                <li>
                  <AiOutlineCheck className='service_list-icon'/>
                  <p>Love for outdoors and nature</p>
                </li>
                <li>
                  <AiOutlineCheck className='service_list-icon'/>
                  <p>River rafting</p>
                </li>
                <li>
                  <AiOutlineCheck className='service_list-icon'/>
                  <p>Enjoying peace and calm</p>
                </li>

              </ul>






          </article>






          <article className='service'>

              <div className='service_head'>
              <h3>Tech Pitch Tournaments</h3>

              <img src={Accomplishment}/>

              </div>

              <ul className='service_list'>
                <li>
                  <AiOutlineCheck className='service_list-icon'/>
                  <p>Love for outdoors and nature</p>
                </li>
                <li>
                  <AiOutlineCheck className='service_list-icon'/>
                  <p>River rafting</p>
                </li>
                <li>
                  <AiOutlineCheck className='service_list-icon'/>
                  <p>Enjoying peace and calm</p>
                </li>

              </ul>






          </article>

        </div>
    </section>
  )
}

export default Extra