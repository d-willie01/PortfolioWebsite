import React from 'react';
import './header.css';
import CTA from './CTA';
import TempProfile from '../../assets/TempProfile.JPG'
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    
    <header>
      <div className='header_container'>
      <h5>Hello I am</h5>
      <h1>Darius Williams</h1>
      
      <h5 className='text-light'>Fullstack Developer</h5>
      <CTA/>

      <HeaderSocials/>

      <div className='me'>

        <img src={TempProfile}/>

      </div>

      <a href='#contact' className='scroll_down'>Scrool Down</a>

    
    </div>
      
    </header>







  )
}

export default Header;