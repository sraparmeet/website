import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Nav from './Nav'


// This is the subheader which is used on other pages than home Page because it will display page name on top of background Image

const SubHeader = () => {
    const location = useLocation();

    // Function to get the current page name based on the pathname
    const getPageName = (pathname) => {
        switch (pathname) {
            case '/':
                return 'HOME';
            case '/about':
                return 'ABOUT';
            case '/service':
                return 'SERVICES';
            case '/blog':
                return 'BLOG';
            case '/contact':
                return 'CONTACT';
            case '/supervisa':
                return 'Super Visa Insurance';
            default:
                return '';
        }
    };

    // Get the current page name
    const currentPage = getPageName(location.pathname);

    const [isNavOpen, setNavOpen] = useState(false);

    const toggleMenu = () => {
        setNavOpen(!isNavOpen);
    };

    return (
        <>
        {/* I have mixed nav and subheader in one to make a top of the page  */}
        {/* Same Nav is used  */}
        <Nav/>
        <section className="sub-header">
            <div className="text-box-2">
                <h1>{currentPage}</h1>
            </div>
        </section>
        </>
    );
}

export default SubHeader;
