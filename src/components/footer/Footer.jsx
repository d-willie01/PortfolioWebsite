import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      
      <a href='#about' className='footer_logo'>Created & Designed by Darius Williams</a>

      <ul className='permalinks'>
        
        
        <li><a href='#about'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#activities'>Activities</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>


        <div className='footer_copyright'>
          <small>&copy; Darius Williams. All rights reserved</small>

        </div>





      </ul>
    </footer>
  )
}

export default Footer;