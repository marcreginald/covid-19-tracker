import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link } from 'react-router-dom';

const NavBar = () => {
    return <BrowserRouter>
        <div>
    <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/home">Covid-19 Tracker</Navbar.Brand>
            <Nav className="ml-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="https://github.com/marcreginald/covid-19-tracker" target="_blank">About</Nav.Link>
            </Nav>
  </Navbar>
        </div>
        </BrowserRouter>
}

export default NavBar;