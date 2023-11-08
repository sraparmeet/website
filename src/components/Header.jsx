import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import {HashLink} from 'react-router-hash-link';

// This is the Header which is the top content of the Home Page. This is only used for Home Page
// SubHeader file is used for ther pages top 

const Header = () => {
    
    return (
        <section className="header">
        {/* Importing Nav  */}
        <Nav/>  
            <div className="home-content">
                <div className="background-image">
                    <img src={require("../images/Taj.png")} className='taj-logo'/>
                    <h1 className="image-heading">For all your <br/>insurance needs</h1>
                    <p className="image-text"><i className="fas fa-phone fa-flip-horizontal"></i><a href="tel:+16479798245"> +1 (647) 979-8245</a></p>
                    
                </div>
                <div className="text-box">
                    <h1>Taj Insurance and Investment Services</h1>
                    <p>Your Safety, Our Priority</p>
                    <p className="home-line">We understand that life is full of unexpected twists and turns. That's why we're here to provide you with peace of mind, no matter what comes your way. Our comprehensive insurance solutions are tailored to protect what matters most to you.</p>
                    <div className="contact-home-page">
                    <HashLink to="/contact#quote-section" smooth={true} duration={500} className="button-48"><span class="text">GET QUOTE</span></HashLink>
                    <a href="tel:+16479798245" target="_blank" className="button-48"><span class="text">Call us</span></a>
                    </div>
                    <p className='text-box-email'><a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=insurancebyparm@gmail.com" target="_blank" className='email-home'><i className="fas fa-envelope"></i> insurancebyparm@gmail.com</a></p>
                </div>
            </div>
        </section>
    );
}

export default Header;
