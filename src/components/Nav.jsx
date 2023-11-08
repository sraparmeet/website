import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [isNavOpen, setNavOpen] = useState(false);
    const [isServicesOpen, setServicesOpen] = useState(false);

    const toggleMenu = () => {
        setNavOpen(!isNavOpen);
    };

    const toggleServices = () => {
        setServicesOpen((prevServicesOpen) => !prevServicesOpen);
    };
    
    // Subheader? This same nav is used or Header File and SubHeader File (SubHeader are other pages than Home, I have use Subheader for them to display Page Name on the top of background Image)

    return (

            <nav>
                <div>
                    <Link to={"/"}><img src={require("../images/logo.png")}/></Link>
                </div>
                <div className="both-nav">
                    <div className="contact-box">
                        <a className="contact-link" href="tel:+16479798245">
                            <div className="i-contain"><i className="fas fa-phone fa-flip-horizontal"></i></div>
                            <div className="contact-info">
                                <h2 className="action-nav">+1 (647) 979-8245</h2>
                            </div>
                        </a>
                    </div>
                    <div className="above-nav">
                        <div className="nav-links" id="navLinks" style={{ right: isNavOpen ? 0 : "-200px" }}>
                            <i className="fa fa-close" onClick={toggleMenu}></i>
                            <ul>
                                <li><Link to={"/"}>HOME</Link></li>
                                <li><Link to={"/about"}>ABOUT</Link></li>
                                <li><div className="services-container"><Link to={"/service"}>SERVICES</Link>
                                    
                                        <button className={`services-button ${isServicesOpen ? 'open' : ''}`} onClick={toggleServices}>
                                            
                                            <i className={`fa ${isServicesOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                                        </button></div>
                                        <div className={`service-dropdown ${isServicesOpen ? 'open' : ''}`}>
                                            <ul className="service-ul">
                                                <li><i className="fa-solid fa-chevron-right"></i><Link to="/supervisa">SuperVisa Ins.</Link></li>
                                                <li><i className="fa-solid fa-chevron-right"></i><Link to="/">RRSP</Link></li>
                                                <li><i className="fa-solid fa-chevron-right"></i><Link to="/">RESP</Link></li>
                                                <li><i className="fa-solid fa-chevron-right"></i><Link to="/">Life Ins.</Link></li>
                                                <li><i className="fa-solid fa-chevron-right"></i><Link to="/">Disability</Link></li>
                                                <li><i className="fa-solid fa-chevron-right"></i><Link to="/">Critical Illness</Link></li>
                                                <li style={{borderBottom:'none'}}><i className="fa-solid fa-chevron-right"></i><Link to="/">Travel Ins.</Link></li>
                                            </ul>
                                        </div>
                                    
                                </li>
                                <li><Link to={"/blog"}>BLOG</Link></li>
                                <li><Link to={"/contact"}>CONTACT</Link></li>
                            </ul>
                        </div>
                        <i className="fa fa-bars" onClick={toggleMenu}></i>
                    </div>
                </div>
            </nav>

    )
}

export default Nav;
