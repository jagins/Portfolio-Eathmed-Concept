import React from 'react';
import logo from '../images/earthmed-site-logo-bigger.png';
import Button from 'react-bootstrap/Button';
import '../Styles/Store.css';

function Store()
{
    return (
        <section className='store'>
            <div>
                <Button>Login/Register</Button>
            </div>
            <img src={logo} alt='Earthmed Logo'/>
        </section>
    )
}

export default Store;