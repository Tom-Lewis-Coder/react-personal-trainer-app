import React, { useState } from 'react'
import Header from '../Components/Header'
import Button from '../Components/Button'

const ContactForm = ( props ) => {

    const [formData, setFormData] = useState({ firstname: '', lastname: '', email: '', area: '', dob: '', requirements: '', message: '' })
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
        props.setIsFormSubmitted(true)
        setFormData({ firstname: '', lastname: '', email: '', area: '', dob: '', requirements: '', message: '' })
    }

    return (
        <div>
            <div className='app__contact-form app__flex'>
                <Header className={'app__contact-title'} title={'How can I help you'} />
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
                    <Button className={'app__contact-form-button app__flex'} onClick={handleSubmit} title={loading ? 'Sending' : 'Send >>'} />
                </div>
            </div>
        </div>
    )
}

export default ContactForm