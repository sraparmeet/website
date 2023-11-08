import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section quote-section">
          <h3>Request Free Consultation</h3>
          <p>Contact us for more information about our services.</p>
          <a href="tel:+17059305544" className='callNow'>Call Now</a>
        </div>
        <div className="footer-section simran-section">
          <h3>Parmjeet Kaur</h3>
          <span>- Insurance Broker</span>
          <p>
          We are dedicated to securing the most competitive rates for your Canadian insurance needs, including Supervisa Insurance, Emergency Medical Insurance for Visitors, and coverage for new immigrants. Your peace of mind is our top priority.
          </p>
        </div>
        <div className="footer-section links-section">
          <h3>Useful Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-contact">
        <div className="contact-info-2">
          <h3>Contact us</h3>
          <p>Location: 10-5 Melanie Dr, Brampton, ON L6T 4K8, Canada</p>
          <p>Email: <a href="mailto:insurancebyparm@gmail.com">insurancebyparm@gmail.com</a></p>
          <p>Call: <a href="tel:+16479798245">+1 (647) 979-8245</a></p>
          <div className="icons">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-instagram"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
        </div>
        </div>
      </div>
      <div className="footer-disclaimer">
        <p>
        Disclaimer: All insurance products are provided by us, and the information on this website is for individuals residing in Canada or those planning to visit. Rates displayed here are estimates.
        </p>
        <div className="footer-links">
          <span><a href="#">Super Visa Insurance Brampton</a> | </span>
          <span><a href="#">Critical Illness Insurance Brampton</a> | </span>
          <span><a href="#">Term Life Insurance Brampton</a> | </span>
          <span><a href="#">Travel Insurance Brampton</a> | </span>
          <span><a href="#">Disability Insurance Brampton</a> | </span>
          <span><a href="#">Super Visa Insurance Cambridge</a> | </span>
          <span><a href="#">Critical Illness Insurance Cambridge</a> | </span>
          <span><a href="#">Term Life Insurance Cambridge</a> | </span>
          <span><a href="#">Travel Insurance Cambridge</a> | </span>
          <span><a href="#">Disability Insurance Cambridge</a> | </span>
          <span><a href="#">Super Visa Insurance Kitchener</a> | </span>
          <span><a href="#">Critical Illness Insurance Kitchener</a> | </span>
          <span><a href="#">Term Life Insurance Kitchener</a> | </span>
          <span><a href="#">Travel Insurance Kitchener</a> | </span>
          <span><a href="#">Disability Insurance Kitchener</a> | </span>
          <span><a href="#">Super Visa Insurance Milton</a> | </span>
          <span><a href="#">Critical Illness Insurance Milton</a> | </span>
          <span><a href="#">Term Life Insurance Milton</a> | </span>
          <span><a href="#">Travel Insurance Milton</a> | </span>
          <span><a href="#">Disability Insurance Milton</a> | </span>
          <span><a href="#">Super Visa Insurance Oakville</a> | </span>
          <span><a href="#">Critical Illness Insurance Oakville</a> | </span>
          <span><a href="#">Term Life Insurance Oakville</a> | </span>
          <span><a href="#">Travel Insurance Oakville</a> | </span>
          <span><a href="#">Disability Insurance Oakville</a></span>
        </div>


      </div>
      <div className="footer-copyright">
        <p>&copy; 2023 All rights reserved | Design & Developed by Taj Insurance and Investment Services</p>
      </div>
    </footer>
  );
};

export default Footer;
