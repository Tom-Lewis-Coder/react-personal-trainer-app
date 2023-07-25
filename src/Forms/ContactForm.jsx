import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import emailjs from '@emailjs/browser'

const ContactForm = (props) => {
  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_CONTACT_SERVICE,
        process.env.REACT_APP_EMAILJS_CONTACT_FORM,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    props.setIsFormSubmitted(true)
  }

  return (
    <form
      className="app__contact-form app__flex"
      onSubmit={handleSubmit}
      ref={form}
    >
      <div className="app__contact-name">
        <input
          className="app__contact-name-item p-text"
          type="text"
          placeholder="Firstname..."
          name="from_firstName"
        />
        <input
          className="app__contact-name-item p-text"
          type="text"
          placeholder="Lastname..."
          name="from_lastName"
        />
      </div>
      <div className="app__contact-details app__flex" id="getInTouch">
        <input
          className="app__contact-item p-text"
          placeholder="Email..."
          type="email"
          name="user_email"
          autoComplete="off"
        />
        <input
          className="app__contact-item p-text"
          placeholder="Your Location..."
          type="text"
          name="user_area"
        />
        <input
          className="app__contact-item p-text"
          placeholder="Date of Birth"
          type="text"
          name="user_dob"
        />
        <select className="app__contact-item p-text" name="user_requirements">
          <option>Select...</option>
          <option value="weight">Weight Management</option>
          <option value="strength">Strength</option>
          <option value="rehab">Rehabilitation</option>
          <option value="posture">Posture Improvement</option>
          <option value="wellness">Wellness</option>
          <option value="event">Event Training</option>
        </select>
        <textarea
          className="app__contact-item p-text"
          placeholder="Your Message.."
          name="user_message"
        ></textarea>
      </div>
      <div>
        <input
          className={'app__contact-form-button app__flex'}
          type="submit"
          value="Send >>"
        />
      </div>
    </form>
  )
}

ContactForm.propTypes = {
  setIsFormSubmitted: PropTypes.func.isRequired
}

export default ContactForm
