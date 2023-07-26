import React from 'react'
import { Link } from 'react-router-dom';
import {Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from "../img/logo.jpg";


const HomePage = () => {

    //const navigate=useNavigate()
  return (
    <div>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand > 
            
            <img
              alt="i.survey"
              src={logo}
               width="50px"
              
              className="d-inline-block align-top"
            /> </Navbar.Brand>
          <Nav className="me-auto">
            
      
            <Nav.Link > </Nav.Link>
            <NavDropdown title="Liste des Surveys" id="basic-nav-dropdown">
              <NavDropdown.Item href="#"><Link to="/survey">Tourism in Tunisia Survey</Link></NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                ... en construction
              </NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link ><Link to="/about">A propos </Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        
    </div>
  )
}

export default HomePage