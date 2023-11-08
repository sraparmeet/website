import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';
import Facility from './Facility.jsx'

const Home = () => {
  return (
    <>
    {/* Header is basically head of the Home Page, the main content */}
    <Header/>
    {/* Facility is the Service Section offered by the Insurance Company  */}
    <Facility/>  
    {/* These are the testimonials hardcoded */}
    <section className="testimonials">
        <h1>What Our Clients Say</h1>
        <p>See What Our Satisfied Customers Have to Say About Our Services</p>
        <div className="row">
            <div className="testimonial-col">
                <img src={require("../images/qoutes.png")}/>
                <div> 
                    <p>"I was seeking the best insurance coverage, and this company delivered exactly what I needed. Their team is highly knowledgeable and friendly."</p>
                    <h3>Sarah Johnson</h3>
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                </div>
            </div>
            <div className="testimonial-col">
                <img src={require("../images/qoutes.png")}/>
                <div>
                    <p>"I am so grateful for the personalized service I received. The team here made it easy for me to understand my insurance options and choose the best one for my family. Thank you!"</p>
                    <h3>John Smith</h3>
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-o"></i>
                    </div>
                </div>
            </div>
            <div className="testimonial-col">
                <img src={require("../images/qoutes.png")}/>
                <div>
                    <p>"I've been a loyal customer for years, and I can't praise this company enough. Their claims process is seamless, and they truly care about their clients."</p>
                    <h3>Sidak Singh</h3>
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                </div>
            </div>
        </div>
    </section> 
    <section className="cta">
        <h1>Get the Insurance You Deserve</h1>
        <p>Protect Your Future with Our Comprehensive Insurance Solutions</p>
        <Link to="/contact" className="button-48"><span class="text">Contact us</span></Link>
    </section>
    </>
  )
}

export default Home
