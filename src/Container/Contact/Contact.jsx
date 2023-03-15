import React, { useState } from 'react'

import { images } from '../../Constants'

const Contact = () => {
    const [formData, setFormData] = useState({ Firstame: '', Lastname: '', email: '', message: '' })

    const { Firstname, Lastname, email, message } = formData

    const handleChangeInput = e => {
        const { name, value } = e.target

        setFormData({ ...formData, [name]: value })
    }

    return (
        <div id='contact'>
            <div className='app__contact-about-form'>
                <div className='app__contact-about-title app__flex'>How can I help you</div>
                <div className='app__contact-about-name app__flex'>
                    <input className='p-text' type='text' placeholder='Firstname...' name='Firstname' value={Firstname} onChange={handleChangeInput} />
                    <input className='p-text' type='text' placeholder='Lastname...' name='Lastname' value={Lastname} onChange={handleChangeInput} />
                </div>
                <div className='app__contact-about-details'>
                    <div className='app__contact-about-email'>email</div>
                    <div className='app__contact-about-country'>Country</div>
                    <div className='app__contact-about-dob'>DOB</div>
                    <div className='app__contact-about-requirements'>Requirements</div>
                    <div className='app__contact-about-message'>Message</div>
                </div>
            </div>
            <div className='app__contact-direct'>Get in touch</div>
            <div className='app__contact-cards app__flex'>
                <a className='app__contact-card' href='mailto:tomlewis139@gmail.com'>
                    <img src={images.email} alt='email' />
                    <div>tomlewis139@gmail.com</div>
                </a>
                <a className='app__contact-card' href='tel:07376 265677'>
                    <img src={images.mobile} alt='mobile' />
                    <div>07376 265677</div>
                </a>
            </div>
        </div>
    )
}

export default Contact