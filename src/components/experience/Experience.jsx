import React from 'react';
import './experience.css';
import {BsFillPatchCheckFill} from 'react-icons/bs';


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I Have</h5>
      <h2>My Experience</h2>





      <div className='container experience_container'>
        <div className='experience_frontend'>
        <h3>Frontend Development</h3>
          <div className='experience_content'>
              <article className='experience_details'>

                <BsFillPatchCheckFill className="experience_details-icon"/>

                <div>
                <h4>Html</h4>
                <small className='text_highlight'>Experienced</small>
                </div>

              </article>
             
             
             
             
              <article className='experience_details'>

              <BsFillPatchCheckFill className="experience_details-icon"/>


              <div>
              <h4>CSS</h4>
              <small className='text_highlight'>Experienced</small>
              </div>

              </article>



              <article className='experience_details'>

              <BsFillPatchCheckFill className="experience_details-icon"/>


              <div>
              <h4>Javascript</h4>
              <small className='text_highlight'>Experienced</small>
              </div>

              </article>



              <article className='experience_details'>

              <BsFillPatchCheckFill className="experience_details-icon"/>


              <div>
              <h4>REACT</h4>
              <small className='text_highlight'>Experienced</small>
              </div>

              </article>




              <article className='experience_details'>

              <BsFillPatchCheckFill className="experience_details-icon"/>


              <div>
              <h4>REACT Native</h4>
              <small className='text_highlight'>Experienced</small>
              </div>

              </article>
          
          
          
          
          </div>
        
        
        </div>



        <div className='experience_backend'>




        <h3>Mobile/Backend Development</h3>
          <div className='experience_content'>
              <article className='experience_details'>

                <BsFillPatchCheckFill className="experience_details-icon"/>


                <div>
                <h4>NODE.js</h4>
                <small className='text_highlight'>Experienced</small>
                </div>

              </article>
             
             
             
             
              <article className='experience_details'>

              <BsFillPatchCheckFill className="experience_details-icon"/>

              
              
              <div>
              <h4>Azure DevOps</h4>
              <small className='text_highlight'>Experienced</small>
              </div>

              </article>



              <article className='experience_details'>

              <BsFillPatchCheckFill className="experience_details-icon"/>


              <div>
              <h4>Xcode/Fastlane</h4>
              <small className='text_highlight'>Experienced</small>
              </div>


              </article>



              <article className='experience_details'>

              <BsFillPatchCheckFill className="experience_details-icon"/>


              <div>
              <h4>Expo</h4>
              <small className='text_highlight'>Experienced</small>
              </div>


              </article>




              <article className='experience_details'>

              <BsFillPatchCheckFill className="experience_details-icon"/>

              <div>
              <h4>MongoDB</h4>
              <small className='text_highlight'>Experienced</small>
              </div>


              </article>
          
          
          
          
          </div>



        </div>





      </div>
    </section>
  )
}

export default Experience