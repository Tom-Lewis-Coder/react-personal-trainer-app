import React, { useState } from 'react'

import { images } from '../../Constants'
import './Contact.scss'

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
        console.log(contact)
        setIsFormSubmitted(true)
    }

    return (
        <div id='contact'>
            {!isFormSubmitted ?
                <div className='app__contact-form app__flex'>
                    <div className='app__contact-title'>How can I help you</div>
                    <div className='app__contact-name'>
                        <input className='app__contact-name-item p-text' type='text' placeholder='Firstname...' name='firstname' value={firstname} onChange={handleChangeInput} />
                        <input className='app__contact-name-item p-text' type='text' placeholder='Lastname...' name='lastname' value={lastname} onChange={handleChangeInput} />
                    </div>
                    <div className='app__contact-details app__flex'>
                        <input className='app__contact-item p-text' placeholder='Email...' name='email' value={email} onChange={handleChangeInput} />
                        <input className='app__contact-item p-text' placeholder='Your Location...' name='area' value={area} onChange={handleChangeInput} />
                        <input className='app__contact-item p-text' placeholder='Date of Birth' name='dob' value={dob} onChange={handleChangeInput} />
                        <select className='app__contact-item p-text' name='requirements' value={requirements} onChange={handleChangeInput} >
                            <option >Select...</option>
                            <option value='weight'>Weight Management</option>
                            <option value='strength'>Strength</option>
                            <option value='rehab'>Rehabilitation</option>
                            <option value='posture'>Posture Improvement</option>
                            <option value='wellness'>Wellness</option>
                            <option value='event'>Event Training</option>
                        </select>
                        <textarea className='app__contact-item p-text' placeholder='Your Message..' name='message' value={message} onChange={handleChangeInput} ></textarea>
                    </div>
                    <div>
                        <button className='app__contact-form-button app__flex' type='button' onClick={handleSubmit}>{loading ? 'Sending' : 'Send >>'}</button>
                    </div>
                </div>
                :
                <div>
                    <h3 className='app__contact-title app__flex'>Thank you for getting in touch.</h3>
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
                        <div>Mobile: 07376 265677 </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact