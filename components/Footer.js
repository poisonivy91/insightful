import React from 'react'
import './FooterStyles.css'
import {FaFacebook, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter, FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color: '#ffffff', marginRight: '2rem'}} />
                    <div>
                        <p>123 Acme St.</p>
                        <h4>Houston, Tx</h4>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color: '#ffffff', marginRight: '2rem'}}/>1-800-123-1234</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color: '#ffffff', marginRight: '2rem'}}/>fit@insightful.com</h4>
                </div>
            </div>
            
            <div className='right'>
                <h4>About the company</h4>
                <p>Welcome to Insightfully Fit, We believe that everyone deserve to live a healthy lifestyle. 
                we created this site to provide the tools needed to help you be more healthy.
                Let's get active and fit, Join Us Today.</p>
                <div className='social'>
                    <FaFacebook size={30} style={{color: '#ffffff', marginRight: '1rem'}} />
                    <FaTwitter size={30} style={{color: '#ffffff', marginRight: '1rem'}} />
                    <FaInstagram size={30} style={{color: '#ffffff', marginRight: '1rem'}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer