import React from 'react'
import Button from '../Components/Button'

const ContactForm = ( props ) => {
    return (
        <div>
            <div className='app__contact-form app__flex'>
                <div className='app__contact-title'>How can I help you</div>
                <div className='app__contact-name'>
                    <input className='app__contact-name-item p-text' type='text' placeholder='Firstname...' name='firstname' value={props.firstname} onChange={props.handleChangeInput} />
                    <input className='app__contact-name-item p-text' type='text' placeholder='Lastname...' name='lastname' value={props.lastname} onChange={props.handleChangeInput} />
                </div>
                <div className='app__contact-details app__flex'>
                    <input className='app__contact-item p-text' placeholder='Email...' name='email' value={props.email} onChange={props.handleChangeInput} />
                    <input className='app__contact-item p-text' placeholder='Your Location...' name='area' value={props.area} onChange={props.handleChangeInput} />
                    <input className='app__contact-item p-text' placeholder='Date of Birth' name='dob' value={props.dob} onChange={props.handleChangeInput} />
                    <select className='app__contact-item p-text' name='requirements' value={props.requirements} onChange={props.handleChangeInput} >
                        <option >Select...</option>
                        <option value='weight'>Weight Management</option>
                        <option value='strength'>Strength</option>
                        <option value='rehab'>Rehabilitation</option>
                        <option value='posture'>Posture Improvement</option>
                        <option value='wellness'>Wellness</option>
                        <option value='event'>Event Training</option>
                    </select>
                    <textarea className='app__contact-item p-text' placeholder='Your Message..' name='message' value={props.message} onChange={props.handleChangeInput} ></textarea>
                </div>
                <div>
                    <Button className={'app__contact-form-button app__flex'} onClick={props.handleSubmit} title={props.loading ? 'Sending' : 'Send >>'} />
                </div>
            </div>
        </div>
    )
}

export default ContactForm