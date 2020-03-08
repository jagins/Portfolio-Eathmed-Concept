import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {FaFacebookSquare, FaTwitter} from 'react-icons/fa';
import { IconContext } from 'react-icons';
import {Link} from 'react-router-dom';
import '../Styles/SocialMedia.css';

function NavbarComponent() {
    return (
        <Navbar bg='dark' variant='dark' expand='lg'>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse style={{margin: '0'}}id='responsive-navbar-nav'>
                <Nav style={{marginLeft: '26.5%'}}>
                    <Nav.Link as={Link} to='/' style={{marginLeft: '50px'}} href='/'>Home</Nav.Link>
                    <NavDropdown style={{marginLeft: '50px'}} bg='dark' title='Patient Information' id='collapseable-nav-dropdown'>
                        <NavDropdown.Item as={Link} to='/opioid-program'>Opioid Alternative Cannabis Program</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/medical-conditions'>Qualifying Medical Conditions</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/medical-card'>Get Your Medical Marijuana Card</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/recreation'>Recreational Marijuana</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/faq'>Frequently Asked Questions</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown style={{marginLeft: '50px'}} bg='dark' title='Cannabis' id='collapseable-nav-dropdown'>
                        <NavDropdown.Item as={Link} to='/plants'>Plants</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/products'>Products</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link style={{marginLeft: '50px'}} as={Link} to='/store'>Store</Nav.Link>
                    <Nav.Link style={{marginLeft: '50px'}} as={Link} to='/contact'>Contact</Nav.Link>
                  <IconContext.Provider value={{size: '30px'}}>
                        <div className='social-icons' style={{marginLeft: '10%', marginTop: '0.5%'}}>
                            <FaTwitter className='facebook'/>
                            <FaFacebookSquare className='twitter'/>
                        </div>
                   </IconContext.Provider>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default NavbarComponent;