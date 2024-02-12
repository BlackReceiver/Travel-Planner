import React from 'react';
import Logo from './Images/IATLogo.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';

function AddNewDestination() {
  return (
    <div>
        <nav className='navbar navbar-expand-sm navbar-dark bg-light'>
            <div className='container-fluid'>
            <a href='#' className='nav-link'><img src={Logo} alt='Logo' className='img-fluid' style={{ maxWidth: '150px', height: 'auto' }}/></a>

            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <a href='#' className='nav-link active'>Manage Accounts</a>
                </li>

                <li className='nav-item'>
                    <a href='#' className='nav-link'>Manage Destinations</a>
                </li>
            </ul>
            </div>
        </nav>






        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home"><img src={Logo} alt='Logo' className='img-fluid' style={{ maxWidth: '150px', height: 'auto' }}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#">Manage Accounts</Nav.Link>
                    <Nav.Link href="#">Manage Destinations</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>




        
    </div>
  )
}
export default AddNewDestination;