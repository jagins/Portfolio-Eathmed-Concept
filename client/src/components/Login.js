import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import Navbar from './Navbar';
import '../Styles/Login.css';

function Login()
{
    return (
        <div className='login'>
            <Navbar/>
            <div>
                <h3>Login</h3>
                <p>New Here? <Link to='/shop/register'>Create and account</Link></p>
                <input type='text' placeholder='Email Address'/>
                <br/>
                <input type='password' placeholder='Password'/>
                <br/>
                <div className='password-link'>
                    <Link to='/shop/forgot-password'>Forgot your password?</Link>
                </div>
                <br/>
                <Button className='login-btn'>Login</Button>
            </div>
        </div>
    );
}

export default Login;