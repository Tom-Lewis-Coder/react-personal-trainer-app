import React, { useState } from 'react'

import { images } from '../../Constants'
import './Contact.scss'
import ContactForm from '../../Forms/ContactForm'

const Contact = () => {
    const [formData, setFormData] = useState({ firstname: '', lastname: '', email: '', area: '', dob: '', requirements: '', message: '' })
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const { firstname, lastname, email, area, dob, requirements, message } = formData

    const handleChangeInput = e => {
        const { name, value } = e.target

        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = () => {
        setLoading(true)
        const contact = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            area: area,
            dob: dob,
            requirements: requirements,
            message: message,
        }
        console.log(contact) // send to db functionality here
        setIsFormSubmitted(true)
    }

    return (
        <div id='contact'>
            {!isFormSubmitted ?
                <ContactForm handleChangeInput={handleChangeInput} handleSubmit={handleSubmit} formData={formData} loading={loading} />
                :
                <div>
                    <h3 className='app__contact-title-resp app__flex'>Thank you for getting in touch.</h3>
                </div>
            }
            <div className='app__contact-direct app__flex'>
                <div className='app__contact-title app__flex'>Contact Directly</div>
                <div className='app__contact-card '>
                    <a className='app__contact-card-item' href='mailto:tomlewis139@gmail.com'>
                        <img src={images[0]} alt='email' />
                        <div>tomlewis139@gmail.com</div>
                    </a>
                    <a className='app__contact-card-item' href='tel:07376 265677'>
                        <img src={images[1]} alt='mobile' />
                        <div>07376 265677 </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact