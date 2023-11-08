import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SubHeader from './SubHeader.jsx';
import { Link } from 'react-router-dom';

// In this for Contact Form, I have used EmailJS and it is currenlty connected to my account

const Contact = () => {
  const form = useRef();
  const [confirmation, setConfirmation] = useState('');
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    //Change this as per EmailJS Credentials
    emailjs.sendForm('service_ducil2t', 'template_e59rnua', form.current, 'GOTW4mvgXSrQuZdbK')
      .then((result) => {
        console.log(result.text);
        setConfirmation('Your message has been sent. You will receive a response within 24 hours.');
        setFormData({
          user_name: '',
          user_email: '',
          user_subject: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        setConfirmation('There was an error sending your message. Please try again later.');
      });
  };

  return (
    <>
      <SubHeader />
      <section className="contact-us">
        <div className="row">
          <div className="contact-col">
            <div>
                <i className="fa fa-home"></i>
                    <span>
                            <h5>10-5 Melanie Dr</h5>
                            <p>Brampton, ON L6T 4K8, Canada</p>
                        </span>
                    </div>
                    <div>
                        <i className="fa fa-phone"></i>
                        <span>
                            <h5><a href="tel:+16479798245">+1 (647) 979-8245</a></h5>
                            <p>Monday to Saturday 10 Am to 6 Pm</p>
                        </span>
                    </div>
                    <div>
                        <i className="fa fa-envelope-o"></i>
                        <span>
                            <h5><a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=insurancebyparm@gmail.com" target="_blank">insurancebyparm@gmail.com</a></h5>
                            <p>Email us your query</p>
                        </span>
                    </div>
                    <div className="map-container">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28864.204440398927!2d-79.72550444806394!3d43.69113465937281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b75f7d8d6e155%3A0xe7f4b57ca919b583!2s10-5%20Melanie%20Dr%2C%20Brampton%2C%20ON%20L6T%204K8%2C%20Canada!5e0!3m2!1sen!2sca!4v1645615095527!5m2!1sen!2sca" frameborder="0" style={{ border: '0' }} allowfullscreen></iframe>
                  </div>
                </div>
            
          <div className="contact-col" id='quote-section'>
            <p>*Get a Quote | Fill out this form</p>
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="user_name"
                placeholder="Enter your name*"
                required
                value={formData.user_name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="user_email"
                placeholder="Enter email address*"
                required
                value={formData.user_email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="user_subject"
                placeholder="Enter your phone number*"
                required
                value={formData.user_subject}
                onChange={handleChange}
              />
              <textarea
                rows="3"
                name="message"
                placeholder="How can we help you?"
                value={formData.message}
                onChange={handleChange}
              />
              <button type="submit" className="hero-btn red-btn" value="Send">
                Submit
              </button>
            </form>
            {confirmation && <p>{confirmation}</p>}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
