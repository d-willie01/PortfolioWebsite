import React from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {GiNetworkBars} from 'react-icons/gi'
import {BiMessageEdit} from 'react-icons/bi'
import {AiOutlineFolderOpen} from 'react-icons/ai'




const Nav = () => {
  return (
    
    <nav>
        <a href="#"><AiOutlineHome/></a>
        <a href="#about"><AiOutlineUser/></a>
        <a href="#experience"><GiNetworkBars/></a>
        <a href="#portfolio"><AiOutlineFolderOpen/></a>
        <a href="contact"><BiMessageEdit/></a>


    </nav>
  
    )
}

export default Nav;