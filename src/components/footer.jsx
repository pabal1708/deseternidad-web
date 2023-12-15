import React from 'react'
import Instagram from '../assets/icons/instagram'
import Youtube from '../assets/icons/youtube'
import Spotifi from '../assets/icons/spotify'

const Footer = () => {
  return (
    <div className="footerContainer">
        
            <div className='footerIcon'>
               <Instagram />
            </div>
            <div className='footerIcon'>
               <Youtube />
            </div>
            <div className='footerIcon'>
               <Spotifi />
            </div>
       
    </div>
  )
}

export default Footer;
