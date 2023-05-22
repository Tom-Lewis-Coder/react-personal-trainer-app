import React from 'react'
import { SiInstagram, SiYoutube, SiTwitter, SiFacebook } from 'react-icons/si'

import './Footer.scss'

const Footer = () => {
    return (
        <div className='app__footer-section' id='Footer'>
            <div className='app__footer-social-media'>
                <p>Find us at</p>
                <div className='app__footer-social-svg app__flex'>
                    <a className='app__footer-svg' href='https://www.instagram.com'>
                        <SiInstagram size={27} />
                    </a>
                    <a className='app__footer-svg' href='https://www.youtube.com'>
                        <SiYoutube size={27} />
                    </a>
                    <a className='app__footer-svg' href='https://www.twitter.com'>
                        <SiTwitter size={27} />
                    </a>
                    <a className='app__footer-svg' href='https://www.facebook.com'>
                        <SiFacebook size={27} />
                    </a>
                </div>
            </div>

            <div className='app__footer-copywrite'>
                <p>@2023 TSL Fitness Ltd <br/>All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer 