import React from 'react';
import './Experience.css';
import {BsFillPatchCheckFill} from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>React</h4>
                <small className='text_highlight'>Experienced</small>
              </div>
            </article>
            
            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>React Native</h4>
                <small className='text_highlight'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className='text_highlight'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>HTML/CSS</h4>
                <small className='text_highlight'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience_backend'>
          <h3>Backend & DevOps</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>Node.js</h4>
                <small className='text_highlight'>Experienced</small>
              </div>
            </article>
            
            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>Python</h4>
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
                <h4>CI/CD</h4>
                <small className='text_highlight'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>Docker</h4>
                <small className='text_highlight'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience_database'>
          <h3>Databases & Tools</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>MongoDB</h4>
                <small className='text_highlight'>Experienced</small>
              </div>
            </article>
            
            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>PostgreSQL</h4>
                <small className='text_highlight'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>SQL</h4>
                <small className='text_highlight'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>Git</h4>
                <small className='text_highlight'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>ServiceNow</h4>
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