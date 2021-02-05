import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {setToken} from '../utils/tokenMethods';
import Button from 'react-bootstrap/Button';

function Register2({data}) {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const passwordChange = (event) => {
        setPassword(event.target.value);
    }

    const confirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(password === confirmPassword)
        {
            const registrationData = {...data, password};
            axios.post(`${process.env.REACT_APP_URL}/auth/register`, registrationData)
            .then(res => {
                setToken(res.data.token);
                history.push('/store');
            })
            .catch(err => console.log(err))
        }
        else {
            setError('Passwords must match')
        }
    }

    return (
        <div>
            <h3 style={{ textAlign: 'center', marginTop: '5%' }}>Let's setup a password</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type='password'
                    placeholder='Password'
                    onChange={passwordChange}
                    value={password}
                />
                <input
                    type='password'
                    placeholder='Confirm password'
                    onChange={confirmPasswordChange}
                    value={confirmPassword}
                />
                {error.length > 0 && <span>Passwords must match</span> }
                <Button type='submit'>Create Password</Button>
            </form>
        </div>
    );
}

export default Register2;