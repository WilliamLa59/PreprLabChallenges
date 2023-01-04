import React from 'react'

import './Footer.scss'

export const Footer = () => {
  return (
     
    <footer className='footer-container'>
            <div className='footer-grid'>
                <div className='version'>
                    v8.0.1
                </div>  
                <div className='footer-links'>
                    <a href="">Privacy Policy</a>
                    <a href="" className='center-link'>Terms of Use</a>
                    <a href="">Help Centery</a>
                </div>
                <div className='powered-by'>
                    Powered by <span>LearnLab.ai</span>
                </div>
            </div>
    </footer>
    
   
  )
}
