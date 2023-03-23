import React from 'react'
import {FaLinkedinIn} from "react-icons/fa"
import {BsGithub} from "react-icons/bs"


const HeaderSocials = () => {
  return (
    <div className='header_socials'>

        <a href='https://github.com/d-willie01' target='_blank'><BsGithub/></a> 
        <a href='https://linkedin.com/in/darius-williams-7bb4b3258' target='_blank'><FaLinkedinIn/></a> 
        
    
    </div>
  )
}

export default HeaderSocials