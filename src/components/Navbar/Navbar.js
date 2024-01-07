import React, { useState, useEffect ,useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
import {  Nav, NavDropdown } from 'react-bootstrap';
import img1 from '../../images/Untitled2.png';
import img2 from '../../images/Polygon 2.png';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
function Navbar() {
  const [expanded, setExpanded] = useState(false);


  return (
    <>
     <div className='mentor-navbar'>
      <div className='nav1'>
      <Link to="/">
            <a>
              <FontAwesomeIcon icon={faHome} size='lg' className='home'/>
            </a>
          </Link>
        <a><NavDropdown title="Education" id="basic-nav-dropdown">
            <NavDropdown.Item href="#about-us">About Us</NavDropdown.Item>
            <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
          </NavDropdown></a>
        <a><NavDropdown title="Study Abroad" id="basic-nav-dropdown">
            <NavDropdown.Item href="#about-us">About Us</NavDropdown.Item>
            <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
          </NavDropdown></a>
        <a><NavDropdown title="Resources" id="basic-nav-dropdown">
            <NavDropdown.Item href="#about-us">About Us</NavDropdown.Item>
            <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
          </NavDropdown></a>
        
      
      </div>
      <div className='nav2'>
      
      <img className="img1" src={img1} alt='Image1' />
      </div>
      <div className='nav3'>
      
        <a><NavDropdown title="About us" id="basic-nav-dropdown" >
            
            <NavDropdown.Item className='drop'><div className='extra1'><Link className="extra2"to="/blog">Blog</Link></div></NavDropdown.Item>
            <NavDropdown.Item className='drop'><div className='extra1'><Link className="extra2" to="/media">Event and Media</Link></div></NavDropdown.Item>
            <NavDropdown.Item className='drop'><div className='extra1'><Link className="extra2" to="/test">Testimonials</Link></div></NavDropdown.Item>
            <NavDropdown.Item className='drop'><div className='extra1'><Link className="extra2" to="/about">Company</Link></div></NavDropdown.Item>
          </NavDropdown></a>
        <a ><Link className="extras" to="/contact">Contact</Link></a>
       
        <button className='bbb'>Sign IN</button>
      </div>
     </div>
    </>
  );
}

export default Navbar;