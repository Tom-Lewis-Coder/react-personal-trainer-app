import React from 'react'
import { SiInstagram, SiYoutube, SiTwitter, SiFacebook } from 'react-icons/si'
import { Link } from 'react-router-dom'

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
            <div className='app__footer-divider'></div>
            <div className='app__footer-middle'>
                <div className='app__footer-middle-left'>
                    <h2>Based In:</h2>
                    <p>Temple Cloud</p>
                    <p>Somerset</p>
                    <p>BS39</p>
                </div>
                <div className='app__footer-middle-middle'>
                    <h2>Contact:</h2>
                    <a href='mailto:tslfitnessltd@gmail.com'>Email: tslfitnessltd@gmail.com</a>
                    <a href='tel:07376 265677'>Tel: 07376 265677</a>
                </div>
                <div className='app__footer-middle-right'>
                    <h2>About:</h2>
                    <Link to={'./FAQ'}>FAQ</Link>
                    <a href='#blog/nutrition'>Blog</a>
                    <Link to={'./videos'}>Videos</Link>
                </div>
            </div>
            <div className='app__footer-divider'></div>
            <div className='app__footer-copywrite'>
                <p>@2023 TSL Fitness Ltd <br />All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer 