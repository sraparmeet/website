import React from 'react'
import { Link } from 'react-router-dom';

// This is the Services Section, Facilities offered by the Company

const Facility = () => {
  return (
    <section className="facility">
        <h1>Discover Our Insurance Solutions</h1>
        <div className="row">
            <div className="facility-col">
                <img src={require("../images/super_visa_2.jpg")}/>
                <h3><Link to='/supervisa'>SUPER VISA</Link></h3>
                <p>Ensure your loved ones can visit you in Canada with ease. Our Super Visa Insurance provides the financial support needed for hassle-free travel.</p>
            </div>
            <div className="facility-col">
                <img src={require("../images/rrsp.jpg")}/>
                <h3><Link to='/'>RRSP</Link></h3>
                <p>Invest in your retirement with Registered Retirement Savings Plans (RRSP). Secure your future and enjoy tax benefits while you save.</p>
            </div>
            <div className="facility-col">
                <img src={require("../images/resp.jpg")}/>
                <h3><Link to='/'>RESP</Link></h3>
                <p>Give your child the gift of a bright future with a Registered Education Savings Plan (RESP). Invest in their education and watch them succeed.</p>
            </div>
            <div className="facility-col">
                <img src={require("../images/family.jpg")}/>
                <h3><Link to='/'>LIFE INSURANCE</Link></h3>
                <p>Protect your family's financial future with Life Insurance. Ensure they are provided for in case of the unexpected, offering peace of mind.</p>
            </div>
            <div className="facility-col">
                <img src={require("../images/disability.jpg")}/>
                <h3><Link to='/'>DISABILITY</Link></h3>
                <p>Shield your income and secure your lifestyle with Disability Insurance. In times of illness or injury, we've got you covered.</p>
            </div>
            <div className="facility-col">
                <img src={require("../images/home.jpg")}/>
                <h3><Link to='/'>MORTGAGE INS.</Link></h3>
                <p>Protect your home investment with Mortgage Insurance. Safeguard your property and ensure your loved ones have a place to call home.</p>
            </div>
        </div>
    </section>

  )
}

export default Facility;
