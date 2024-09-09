import React from 'react'

import './ContactUs.css'

const ContactUs = () => (
    <div className='app__contact app__bg section__padding'>
        <div className='app__contact_heading'>
            <h1 className='headtext__cormorant'>Get in touch with us!</h1>
        </div>

        <div className='app__contact-info'>
            <form className='app__contact-form'>
                <div className='form__group'>
                    <label htmlFor='firstName' className='p__cormorant'>First Name</label>
                    <input type='text' id='firstName' name='firstName' className='input__opensans' placeholder='First Name' required />
                </div>

                <div className='form__group'>
                    <label htmlFor='lastName' className='p__cormorant'>Last Name</label>
                    <input type='text' id='lastName' name='lastName' className='input__opensans' placeholder='Last Name' required />
                </div>

                <div className='form__group'>
                    <label htmlFor='email' className='p__cormorant'>Email</label>
                    <input type='email' id='email' name='email' className='input__opensans' placeholder='Email' required />
                </div>

                <div className='form__group'>
                    <label htmlFor='subject' className='p__cormorant'>Subject</label>
                    <input type='text' id='subject' name='subject' className='input__opensans' placeholder='Subject' required />
                </div>

                <div className='form__group'>
                    <label htmlFor='message' className='p__cormorant'>Message</label>
                    <textarea id='message' name='message' className='textarea__opensans' placeholder='Message' required></textarea>
                </div>
            </form>
            <button type='submit' className='custom__button'>Submit</button>

        </div>
    </div>
)

export default ContactUs