import React from 'react';
import '../Styles/ContactForm.css';

function ContactForm()
{
    return(
        <form>
            <input type='text' placeholder='First Name'/>
            <input type='text' placeholder='Last Name'/>
            <br/>
            <input type='email' placeholder='Your Email'/>
            <input type='text' placeholder='Your Phone Number'/>
            <br/>
            <input className='subject' type='text' placeholder='Subject'/>
            <br/>
            <textarea placeholder='Message'/>
            <br/>
            <button>Send Message</button>
    </form>
    );
}

export default ContactForm;