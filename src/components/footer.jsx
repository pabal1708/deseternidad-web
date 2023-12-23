import React from 'react'
import Instagram from '../assets/icons/instagram'
import Youtube from '../assets/icons/youtube'
import Spotifi from '../assets/icons/spotify'

const Footer = () => {
  return (
    <div className="footerContainer">
            <div className='footerIcon'>
                <a  href="https://www.instagram.com/deseternidad/">
               <Instagram />
               </a>
            </div>
            <div className='footerIcon'>
            <a  href="https://www.youtube.com/channel/UCCqVAQvA3h_SGP2CdJCAm1A">
               <Youtube />
               </a>
            </div>
            <div className='footerIcon'>
               <Spotifi />
            </div>
    </div>
  )
}

export default Footer;
