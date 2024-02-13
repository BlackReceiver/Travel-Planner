import React from 'react';
import Logo from './Images/IATLogo.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './AddNewDestination.css';

function AddNewDestination() {
  return (
    <div id='body'>
        <header>
            <Navbar bg="dark" variant="dark" expand="md" sticky='top'>
                <Navbar.Brand href="#home"><img src={Logo} alt='Logo' className='img-fluid' style={{ maxWidth: '150px', height: 'auto' }}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#">Manage Accounts</Nav.Link>
                        <Nav.Link href="#">Manage Destinations</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>

        <div>
            <h1>Not ok</h1>
        </div>
    </div>
  )
}
export default AddNewDestination;