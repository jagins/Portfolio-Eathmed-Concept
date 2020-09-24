import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import Navbar from './Navbar';
import '../Styles/Login.css';

function Login()
{
    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const handleChange = event =>
    {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => 
    {
        event.preventDefault();
        //axios call to backend here
    }
    return (
        <div className='login'>
            <Navbar/>
                <h3>Login</h3>
                <p>New Here? <Link to='/store/register'>Create and account</Link></p>
                <form onSubmit={handleSubmit}>
                    <input 
                        type='text' 
                        placeholder='Email Address' 
                        name='email' 
                        value={state.email}
                        onChange={handleChange}
                    />
                    <br/>
                    <input 
                        type='password' 
                        placeholder='Password'
                        name='password'
                        value={state.password}
                        onChange={handleChange}
                    />
                    <br/>
                    <div className='password-link'>
                        <Link to='/shop/forgot-password'>Forgot your password?</Link>
                    </div>
                    <br/>
                    <Button className='login-btn' type='submit'>Login</Button>
                    </form>
        </div>
    );
}

export default Login;