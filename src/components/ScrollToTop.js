import React, { useEffect } from 'react';
import {useLocation} from 'react-router-dom'

// This is important, it will take to top of the page * Important File, if we are using Links

const ScrollToTop = () => {

    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, [pathname]);
  return null;
  
}

export default ScrollToTop
