import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <>
     
     <Navbar bg="dark" data-bs-theme="dark" className='p-3'>
        <Container fluid>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" as={Link} to={'/'} >Home</Nav.Link>
            <Nav.Link href="/" as={Link} to={'/about'}>About</Nav.Link>
            <Nav.Link href="/" as={Link} to={'/contact'}>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>



 

    </>
   
  )
};
export default Header;
