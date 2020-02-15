import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function NavbarComponent() {
    return (
        <Navbar bg='dark' variant='dark' expand='lg'>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='mr-auto'>
                    <Nav.Link href='#'>Home</Nav.Link>
                    <NavDropdown bg='dark' title='Patient Information' id='collapseable-nav-dropdown'>
                        <NavDropdown.Item href='#action/3.1'>Opioid Alternative Cannabis Program</NavDropdown.Item>
                        <NavDropdown.Item href='#action/3.2'>Transfer/Select Earthmed As Your Dispensary</NavDropdown.Item>
                        <NavDropdown.Item href='#action/3.3'>Qualifying Medical Conditions</NavDropdown.Item>
                        <NavDropdown.Item href='#action/3.4'>Get Your Medical Marijuana Card</NavDropdown.Item>
                        <NavDropdown.Item href='#action/3.5'>Recreationaly Marijuana</NavDropdown.Item>
                        <NavDropdown.Item href='#action/3.6'>Frequently Asked Questions</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarComponent;