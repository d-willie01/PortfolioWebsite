import React from 'react';
import './header.css';
import CTA from './CTA';
//import Avatar from '../../assets/Avatar.JPG'
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

    
    </div>
      
    </header>







  )
}

export default Header;