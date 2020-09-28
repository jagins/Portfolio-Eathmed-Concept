import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import Button from 'react-bootstrap/Button';
import * as yup from 'yup';
import 'yup-phone';
import '../Styles/registration.css';

function Register() 
{
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
    });

    let formSchema = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().email().required(),
        phoneNumber: yup.string().phone().required()

    })

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    }

    const submitForm = (event) => {
        event.preventDefault();
    }

    useEffect(() => {
        formSchema.isValid(state)
        .then(valid => {
            console.log('form is valid');

        })
        .then(err => {
            console.log(err);
        })
    }, [state, formSchema])
    return (
        <div className='registration-form'>
            <Navbar/>
            <div className='reg-header'>
                <h3>Your Information</h3>
                <p>Let's gather some information about you. We'll use this for contact you about your orders.</p>
            </div>
            <form>
                <input 
                    type='text' 
                    placeholder='First Name' 
                    name='firstName'
                    value={state.firstName} 
                    onChange={handleChange}
                />
                <br/>
                <input 
                    type='text' 
                    placeholder='Last Name' 
                    name='lastName'
                    value={state.lastName} 
                    onChange={handleChange}
                />
                <br/>
                <input 
                    type='email' 
                    placeholder='Email Address' 
                    name='email'
                    value={state.email} 
                    onChange={handleChange}
                />
                <br/>
                <input 
                    type='tel' 
                    placeholder='Phone Number' 
                    pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' 
                    name='phoneNumber'
                    value={state.phoneNumber} 
                    onChange={handleChange}
                />
                <br/>
                <Button className='next-btn' disabled>Next</Button>
            </form>
        </div>
    );
}

export default Register;