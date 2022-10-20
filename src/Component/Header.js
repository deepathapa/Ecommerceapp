import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();
  const LogOut = ()=>{
    localStorage.removeItem('login');
    localStorage.clear();
    navigate(`/Login`);
  }

 

  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="">Menu</Nav.Link>
            <Nav.Link href="">product</Nav.Link>
            
           
          </Nav>
          <Form className="d-flex">
           
            <span variant="outline-success">welcome|
           <button onClick={LogOut}>Logout</button></span>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header