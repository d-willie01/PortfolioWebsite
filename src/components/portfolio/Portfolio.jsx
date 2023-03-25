import React from 'react';
import './portfolio.css';
import PairaImage from '../../assets/PairaImage.jpeg';
import AauLandingPage from '../../assets/AauLandingPage.mp4';
import PairaAPI from '../../assets/PairaAPI.png';
import ReactLogo from '../../assets/ReactLogo.png';
import SwipeDemo from '../../assets/SwipeDemo.mp4';



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>


      <div className='container portfolio_container'>
        
        
        
        
        
        <article className='portfolio_item'>
        
        
        <div className='portfolio_item-image'>
              <img src={PairaImage} alt=''/>
          </div>



              <h3>Mobile App 'Paira' Available on iOS & Android</h3>


              <div className='portfolio_item-cta'>
              <a href='https://github.com/d-willie01/Paira/tree/master/ui/v1' className='btn' target={"_blank"}>Github</a>
              <a href='https://www.paira.info/' className='btn btn-primary' target={"_blank"}>Landing Page</a>
              </div>
          

        </article>




        <article className='portfolio_item'>
        
        
        <div className='portfolio_item-image'>
              <video loop autoPlay muted style={{height:300, width: '100%'}} src={AauLandingPage} />
          </div>



              <h3>AAU Women's Basketball Landing Page</h3>


              <div className='portfolio_item-cta'>
              <a href='https://github.com/d-willie01/basketballLandingPage' className='btn' target={"_blank"}>Github</a>
              <a href='' className='btn btn-primary' target={"_blank"}>Live Demo</a>
              </div>
          

        </article>





        <article className='portfolio_item'>
        
        
        <div className='portfolio_item-image'>
        <video loop autoPlay muted style={{height:300, width: '100%'}} src={SwipeDemo} />
          </div>



              <h3>E-commerce Site created linked to firebase, utilizing authentication, database,
                  SWIPE for payment
              </h3>


              <div className='portfolio_item-cta'>
              <a href='' className='btn' target={"_blank"}>Github</a>
              <a href='' className='btn btn-primary' target={"_blank"}>Live Demo</a>
              </div>
          

        </article>





        <article className='portfolio_item'>
        
        
        <div className='portfolio_item-image'>
              <img src={PairaAPI} alt=''/>
          </div>



              <h3>Custom API created using TypeScript and hosted on Azure services using 
                docker, Azure Blob Storage, MapBox, MongoDB and many more software services</h3>


              <div className='portfolio_item-cta'>
              <a href='https://github.com/d-willie01/Paira/tree/master/api/v1' className='btn' target={"_blank"}>Github</a>
              
              </div>
          

        </article>







        <article className='portfolio_item'>
        
        
        <div className='portfolio_item-image'>
              <img src={ReactLogo} alt=''/>
          </div>



              <h3>Portfolio Website Using REACT</h3>


              <div className='portfolio_item-cta'>
              <a href='https://github.com/d-willie01/PortfolioWebsite' className='btn' target={"_blank"}>Github</a>
              
              </div>
          

        </article>


  





      </div>
    </section>
  )
}

export default Portfolio


// src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Eo_circle_light-blue_white_letter-s.svg/1024px-Eo_circle_light-blue_white_letter-s.svg.png'