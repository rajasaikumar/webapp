import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faInstagram,faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container bg-dark">
      
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Follow us on </h3>
          <ul>
            <li><a href="#facebook "><FontAwesomeIcon icon={faFacebook}  className='face mx-3'/>facebook</a></li>
            <li><a href="#instagram"><FontAwesomeIcon icon={faInstagram} className='face mx-3'/>Instagram</a></li>
            <li><a href="#Youtube"><FontAwesomeIcon icon={faYoutube} className='face mx-3' />Youtube</a></li>
          </ul>
        </div>
        

        
        <div className="footer-column">
          <h3>Legal</h3>
          <ul>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
          </ul>
          
        </div>
        
      </div>
      <p class="bg-dark py-4 mx-2">&copy; 2024 Your Company</p>
      <div>
      
      </div>
    </footer>
  );
}

export default Footer;
