import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Service from './components/Service';
import Supervisa from './components/servicecomp/Supervisa';
import About from './components/About';
import Blog from './components/Blog';
import ScrollToTop from './components/ScrollToTop'
import { Link } from 'react-router-dom';

import "./styles/main.css";
import "./styles/media-queries.css";

// Developed By Sidak Sra 

const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/service" element={<Service />}/>
        <Route path="/supervisa" element={<Supervisa />}/>
        <Route path="/blog" element={<Blog />}/>
      </Routes> 
      <Footer />
    </Router>
  )
}

export default App;
