import React from 'react'

import './About.scss'
import { Header } from '../../Components'

const About = () => {
    return (
        <div className='app__about app__flex' id='about'>
            <Header title={'The TSL System'} className={'app__about-title'} />
            <div className='app__about-system'>The quick brown fox jumps over the lazy dog</div>
            <div className='app__about-split-container'>
                <div className='app__about-left'>
                    <div className='app__about-image'>
                        <p>Big Image Text</p> {/* text within pic */}
                    </div>
                    <p className='app__about-caption'><span>Title</span><br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum sem odio, facilisis mollis sapien eleifend eu. Aliquam vehicula, elit et accumsan congue, elit risus viverra sapien, quis molestie magna felis in erat. Phasellus ligula turpis, volutpat ac justo id, cursus bibendum nunc. </p>
                </div>
                <div className='app__about-right app__flex'>
                    <div className='app__about-hero-img'></div>
                    <p>Big Me Text</p> {/* text underneath */}
                </div>
            </div>
        </div>
    )
}

export default About