import React from 'react';
import Navbar from './Navbar';
import Button from 'react-bootstrap/Button';

import '../Styles/registration.css';

function Register() 
{
    return (
        <div className='registration-form'>
            <Navbar/>
            <div className='reg-header'>
                <h3>Your Information</h3>
                <p>Let's gather some information about you. We'll use this for contact you about your orders.</p>
            </div>
            <form>
                <input type='text' placeholder='First Name'/>
                <br/>
                <input type='text' placeholder='Last Name'/>
                <br/>
                <input type='email' placeholder='Email Address'/>
                <br/>
                <input type='tel' placeholder='Phone Number' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'/>
                <br/>
                <Button className='next-btn' disabled>Next</Button>
            </form>
        </div>
    );
}

export default Register;