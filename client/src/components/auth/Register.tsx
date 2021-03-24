import React, {useState} from 'react';
import Navbar from '../global/Navbar';
import Button from 'react-bootstrap/Button';
import * as yup from 'yup';
import 'yup-phone';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import Register2 from './Regsister2';

function Register() {
    const schema = yup.object().shape({
        firstName: yup.string().min(2, 'First name must have least 2 characters').required('First name is a required field'),
        lastName: yup.string().min(4, 'Last name must have at least 4 characters').required('Last name is a required field'),
        email: yup.string().email().required('Email is a required field'),
        phoneNumber: yup.string().phone().required('Phone number is a required field')
    });
    const {register, handleSubmit, errors} = useForm({resolver: yupResolver(schema)});

    const [registerStepNumber, setRegisterStepNumber] = useState(1);
    const [data, setData] = useState({});
   
    const onSubmit = data => {
        setData(data);
        setRegisterStepNumber(registerStepNumber + 1);
    };
    return (
        <div className='registration-form'>
            <Navbar />
            {registerStepNumber === 1 && (
                <div>
                    <div className='reg-header'>
                        <h3>Your Information</h3>
                        <p>Let's gather some information about you. We'll use this for contact you about your orders.</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type='text'
                            placeholder='First Name'
                            name='firstName'
                            ref={register}
                        />
                        {errors.firstName && <span>{errors.firstName.message}</span>}
                        <br />
                        <input
                            type='text'
                            placeholder='Last Name'
                            name='lastName'
                            ref={register}
                        />
                        {errors.lastName && <span>{errors.lastName.message}</span>}
                        <br />
                        <input
                            type='email'
                            placeholder='Email Address'
                            name='email'
                            ref={register}
                        />
                        {errors.email && <span>{errors.email.message}</span>}
                        <br />
                        <input
                            type='tel'
                            placeholder='Phone Number'
                            name='phoneNumber'
                            ref={register}
                        />
                        {errors.phoneNumber && <span>{errors.phoneNumber.message}</span>}
                        <br />
                        <Button className='next-btn' type='submit'>Next</Button>
                    </form>

                </div>
            )}
                

            {registerStepNumber === 2 && <Register2 data={data}/>}
        </div>
    );
}

export default Register;