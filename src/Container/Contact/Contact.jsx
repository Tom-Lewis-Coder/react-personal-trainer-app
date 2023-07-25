import React, { useState } from 'react'

import { images } from '../../Constants'
import { Header } from '../../Components'
import './Contact.scss'
import ContactForm from '../../Forms/ContactForm'

const Contact = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  return (
    <div id="contact" className="app__contact">
      <Header className={'app__contact-title'} title={'How can I help you'} />
      {!isFormSubmitted ? (
        <ContactForm setIsFormSubmitted={setIsFormSubmitted} />
      ) : (
        <div>
          <h3 className="app__contact-title-resp app__flex">
            Thank you for getting in touch. We will be in contact shortly.
          </h3>
        </div>
      )}
      <div className="app__contact-direct app__flex">
        <div className="app__contact-title app__flex">Contact Directly</div>
        <div className="app__contact-card ">
          <a
            className="app__contact-card-item"
            href="mailto:tslfitnessltd@gmail.com"
          >
            <img src={images[0]} alt="email" />
            <div>tslfitnessltd@gmail.com</div>
          </a>
          <a className="app__contact-card-item" href="tel:07376 265677">
            <img src={images[1]} alt="mobile" />
            <div>07376 265677 </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
