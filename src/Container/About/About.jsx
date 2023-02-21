import React from 'react'

import './About.scss'

const About = () => {
    return (
        <div className='app__about app__flex' id='about'>
            <div className='app__about-title'>The Tom Lewis System</div>
            <div className='app__about-system'>Lorem Ipsum spiel spiel, the quick brown fox jumps over the lazy dog</div>
            <div className='app__about-split-container app__flex'>
                <div className='app__about-left app__flex'>
                    <div className='app__about-image'>Big image</div>
                    <div className='app__about-caption'>Image chat</div>
                </div>
                <div className='app__about-right app__flex'>
                    <div className='app__about-hero-img'>Big me</div>
                </div>
            </div>
        </div>
    )
}

export default About