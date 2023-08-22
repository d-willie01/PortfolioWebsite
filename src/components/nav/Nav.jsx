import React from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {GiNetworkBars} from 'react-icons/gi'
import {BiMessageEdit} from 'react-icons/bi'
import {AiOutlineFolderOpen} from 'react-icons/ai'
import {useState} from 'react'
import {GiPodiumWinner} from 'react-icons/gi';



const Nav = () => {

  const [activeNow, setActiveNow] = useState('#')
  return (
    
    <nav>
      
        <a href="#" onClick={()=> setActiveNow('#')} className={activeNow === '#' ? 'active' : ''}><AiOutlineHome/></a>
        <a href="#about" onClick={()=> setActiveNow('#about')} className={activeNow === '#about' ? 'active' : ''}><AiOutlineUser/></a>
        <a href="#experience" onClick={()=> setActiveNow('#experience')} className={activeNow === '#experience' ? 'active' : ''}><GiNetworkBars/></a>
        <a href="#extra" onClick={()=> setActiveNow('#experience')} className={activeNow === '#extra' ? 'active' : ''}><GiPodiumWinner/></a>
        <a href="#portfolio" onClick={()=> setActiveNow('#portfolio')} className={activeNow === '#portfolio' ? 'active' : ''}><AiOutlineFolderOpen/></a>
        <a href="#contact" onClick={()=> setActiveNow('#contact')} className={activeNow === '#contact' ? 'active' : ''}><BiMessageEdit/></a>


    </nav>
  
    )
}

export default Nav;