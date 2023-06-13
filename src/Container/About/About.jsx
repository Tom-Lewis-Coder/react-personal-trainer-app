import React from 'react'

import './About.scss'
import { Header } from '../../Components'

const About = () => {
    return (
        <div className='app__about app__flex' id='about'>
            <Header title={'The TSL System'} className={'app__about-title'} />
            <div className='app__about-system'>Working Together to Accomplish Your Goals.</div>
            <div className='app__about-tsl app__flex'>
                <img className='app__about-hero-img' alt=''/>
                <p>Big Me Text</p>
            </div>
            <div className='app__about-split-container '>
                <div className='app__about-box'>
                    <img className='app__about-image' alt='' />
                    <p className='app__about-caption'><span>Fat Loss</span><br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
                <div className='app__about-box'>
                    <img className='app__about-image-1' alt=''/>
                    <p className='app__about-caption'><span>Health</span><br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
                <div className='app__about-box'>
                    <img className='app__about-image-2'  alt=''/>
                    <p className='app__about-caption'><span>Muscle Building</span><br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
            </div>
        </div>
    )
}

export default About