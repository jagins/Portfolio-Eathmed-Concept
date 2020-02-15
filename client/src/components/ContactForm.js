import React from 'react';

function ContactForm()
{
    return(
        <form>
            <input type='text' placeholder='First Name'/>
            <input type='text' placeholder='Last Name'/>
            <input type='email' placeholder='Your Email'/>
            <input type='text' placeholder='Your Phone Number'/>
            <input type='text' placeholder='Subject'/>
            <textarea placeholder='Message'/>
            <button>Send Message</button>
    </form>
    );
}

export default ContactForm;