import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';

function Register2({data}) {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

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
            console.log(registrationData);
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