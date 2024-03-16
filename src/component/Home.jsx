import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import collegeLogo from './logo.png';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavPageClick = () => {
    setExpanded(false); // Collapse the navbar when a navpage link is clicked
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md" expanded={expanded} collapseOnSelect>
        <Navbar.Brand href="/">
          <img
            src={collegeLogo}
            width="60"
            height="50"
            className="d-inline-block align-top"
            alt="College Logo"
            style={{ marginRight: '10px' }} // Adjust the margin as needed
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <h3 className="nav-title" style={{ color: '#fff', marginRight: '20px' }}>Excalibur</h3>
          </Nav>
          <Nav className="ml-auto" style={{marginLeft:"70px"}}>
            <Link to='/events' className="nav-link" style={{ color: '#fff', marginRight: '40px',  }} onClick={handleNavPageClick}>Events & Register</Link>
            {/* <Link to='/register' className="nav-link" style={{ color: '#fff', marginRight: '10px' }} onClick={handleNavPageClick}>Register</Link> */}
            <Link to='/contact' className="nav-link" style={{ color: '#fff', marginRight: '40px' }} onClick={handleNavPageClick}>Contact us</Link>
            <Link to='/aboutus' className="nav-link" style={{ color: '#fff', marginRight: '40px' }} onClick={handleNavPageClick}>About us</Link>
            <Link to='/team' className="nav-link" style={{ color: '#fff', marginRight: '40px' }} onClick={handleNavPageClick}>Team</Link>
            <Link to='/faq' className="nav-link" style={{ color: '#fff', marginRight: '40px' }} onClick={handleNavPageClick}>FAQ</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Home;
