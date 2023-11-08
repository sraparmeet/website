import React from 'react'
import SubHeader from './SubHeader.jsx'
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <>
    {/* Here I have used the SubHeader, to view what is subheader? go to Nav File or subHeader file */}
    <SubHeader/>
    <section className="about-us">
        <div className="row">
            <div className="about-col">
                <h1>About Parmjeet Kaur, Your Trusted Insurance Agent</h1>
                <p>Welcome to Taj Insurance, where you'll find your dedicated insurance partner, Parmjeet Kaur. With years of experience in the insurance industry, We are committed to securing your financial future and providing you with unparalleled protection for the things that matter most.</p>

                <p>At Taj Insurance and Investment Service, we understand that life can be unpredictable. That's why we're here to offer you the peace of mind you deserve. Our mission is to ensure that you and your loved ones are safeguarded against life's unexpected challenges. We will work closely with you to tailor insurance solutions that perfectly fit your unique needs and circumstances.</p>

                <p>Whether it's Super Visa insurance, RRSP, RESP, Life Insurance, Disability coverage, Mortgage Insurance, or Critical Illness Insurance, Parmjeet Kaur is your go-to expert for all your insurance needs.</p>

                <p>Get started on your journey to a secure future by contacting Parmjeet Kaur today. Your safety is our priority, and we're here to protect your dreams, your loved ones, and your peace of mind.</p>

                <Link to={"/contact"} className="hero-btn red-btn">Contact Now</Link>
            </div>
            <div className="about-col">
                <img src={require("../images/my_image.jpg")}/>
            </div>
        </div>    
    </section>
    </>
  )
}

export default About
