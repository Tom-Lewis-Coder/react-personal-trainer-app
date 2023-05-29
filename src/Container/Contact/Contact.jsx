import React, { useState } from 'react'

import { images } from '../../Constants'
import './Contact.scss'
import ContactForm from '../../Forms/ContactForm'

const Contact = () => {

    const [isFormSubmitted, setIsFormSubmitted] = useState(false)

    return (
        <div id='contact'>
            {!isFormSubmitted ?
                <ContactForm setIsFormSubmitted={setIsFormSubmitted} />
                :
                <div>
                    <h3 className='app__contact-title-resp app__flex'>Thank you for getting in touch.</h3>
                </div>
            }
            <div className='app__contact-direct app__flex' id='getInTouch'>
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