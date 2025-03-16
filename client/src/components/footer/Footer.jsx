import React from 'react'
import './Footer.css'
import Youtube_icon from '../../assets/youtube_icon.png'
import Facebook_icon from '../../assets/facebook_icon.png'
import Instagram_icon from '../../assets/instagram_icon.png'
import Twitter_icon from '../../assets/twitter_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icon">
        <img src={Youtube_icon} alt="" />
        <img src={Facebook_icon} alt="" />
        <img src={Instagram_icon} alt="" />
        <img src={Twitter_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Term of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookies Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copy-right"> &copy; 1997-2025 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
