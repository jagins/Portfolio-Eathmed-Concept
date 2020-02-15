import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {FaFacebookSquare, FaTwitter} from 'react-icons/fa';
import { IconContext } from 'react-icons';
import '../Styles/SocialMedia.css';

function NavbarComponent() {
    return (
        <Navbar bg='dark' variant='dark' expand='lg'>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse style={{margin: '0'}}id='responsive-navbar-nav'>
                <Nav style={{margin: '0 auto'}}>
                    <Nav.Link style={{marginLeft: '50px'}} href='#'>Home</Nav.Link>
                    <NavDropdown style={{marginLeft: '50px'}} bg='dark' title='Patient Information' id='collapseable-nav-dropdown'>
                        <NavDropdown.Item href='#action/3.1'>Opioid Alternative Cannabis Program</NavDropdown.Item>
                        <NavDropdown.Item href='#action/3.2'>Transfer/Select Earthmed As Your Dispensary</NavDropdown.Item>
                        <NavDropdown.Item href='#action/3.3'>Qualifying Medical Conditions</NavDropdown.Item>
                        <NavDropdown.Item href='#action/3.4'>Get Your Medical Marijuana Card</NavDropdown.Item>
                        <NavDropdown.Item href='#action/3.5'>Recreationaly Marijuana</NavDropdown.Item>
                        <NavDropdown.Item href='#action/3.6'>Frequently Asked Questions</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown style={{marginLeft: '50px'}} bg='dark' title='Cannabis' id='collapseable-nav-dropdown'>
                        <NavDropdown.Item href='#action/3.1'>Plants</NavDropdown.Item>
                        <NavDropdown.Item href='#action/3.2'>Products</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link style={{marginLeft: '50px'}} href='#'>Reviews</Nav.Link>
                    <Nav.Link style={{marginLeft: '50px'}} href='#'>Store</Nav.Link>
                    <Nav.Link style={{marginLeft: '50px'}}href='#'>Contact</Nav.Link>
                  <IconContext.Provider value={{size: '30px'}}>
                        <div className='social-icons' style={{marginLeft: '10%', marginTop: '0.5%'}}>
                            <FaTwitter/>
                            <FaFacebookSquare className='twitter'/>
                        </div>
                   </IconContext.Provider>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default NavbarComponent;