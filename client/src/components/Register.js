import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Button from 'react-bootstrap/Button';
import * as yup from 'yup';
import 'yup-phone';
import '../Styles/registration.css';

function Register() {
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        registrationStep: 2
    });

    let formSchema = yup.object().shape({
        firstName: yup.string().min(4).required('First name must be at least 4 characters long'),
        lastName: yup.string().min(4).required('Last name must be at least 4 characters long'),
        email: yup.string().email().required('A vaild email address is required'),
        phoneNumber: yup.string().phone().required('Please enter a valid phone number')

    })

    const handleChange = (event) => {
        event.persist();
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    }

    const submitStep1 = (event) => {
        event.preventDefault();
        formSchema.validate(state)
            .then(isValid => {
                setState({
                    ...state,
                    registrationStep: 2
                });
            })
            .catch(err => console.log(err.errors))
    }

    return (
        <div className='registration-form'>
            <Navbar />
            {state.registrationStep === 1 ? (
                <div>
                    <div className='reg-header'>
                        <h3>Your Information</h3>
                        <p>Let's gather some information about you. We'll use this for contact you about your orders.</p>
                    </div>
                    <form onSubmit={submitStep1}>
                        <input
                            type='text'
                            placeholder='First Name'
                            name='firstName'
                            value={state.firstName}
                            onChange={handleChange}
                        />
                        <br />
                        <input
                            type='text'
                            placeholder='Last Name'
                            name='lastName'
                            value={state.lastName}
                            onChange={handleChange}
                        />
                        <br />
                        <input
                            type='email'
                            placeholder='Email Address'
                            name='email'
                            value={state.email}
                            onChange={handleChange}
                        />
                        <br />
                        <input
                            type='tel'
                            placeholder='Phone Number'
                            name='phoneNumber'
                            value={state.phoneNumber}
                            onChange={handleChange}
                        />
                        <br />
                        <Button className='next-btn' type='submit'>Next</Button>
                    </form>
                </div>
            ) : null}

            {state.registrationStep === 2 ? (
                <div>
                    <h3 style={{ textAlign: 'center', marginTop: '5%' }}>Let's setup a password</h3>
                    <form>
                        <input
                            type='password'
                            placeholder='Password'
                        />
                        <input
                            type='password'
                            placeholder='Confirm password'
                        />
                        <Button>Create Password</Button>
                    </form>
                </div>
            ) : null}
        </div>
    );
}

export default Register;