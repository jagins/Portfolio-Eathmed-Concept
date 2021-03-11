import React from 'react';
import Button from 'react-bootstrap/Button';

function ContactForm() {
    return (
        <div className='contact-form'>
            <form>
                <input type='text' placeholder='First Name' />
                <input type='text' placeholder='Last Name' />
                <br />
                <input type='email' placeholder='Your Email' />
                <input type='text' placeholder='Your Phone Number' />
                <br />
                <input className='subject' type='text' placeholder='Subject' />
                <br />
                <textarea placeholder='Message' />
                <br />
                <Button style={{marginTop: '3%'}} variant='success'>Send Message</Button>
            </form>
        </div>
    );
}

export default ContactForm;