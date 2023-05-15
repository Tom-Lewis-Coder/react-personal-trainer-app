import React, { useState, useEffect } from 'react'
import { headerImages } from '../../Constants'

import './Header.scss'

const Header = () => {
    const [headerImg, setHeaderImg] = useState(headerImages[0])
    const [lightImg, setLightImg] = useState(0)

    useEffect(() => {
        let count = 0
        const timer = setInterval(() => {
            count === headerImages.length - 1 ? count = 0 : count++
            setHeaderImg(headerImages[count])
            setLightImg(count)
        }, 6000)

        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <div className='app__header app__flex' id='home'>
            <div className='app__header-top app__flex'>
                <img src={headerImg} alt='fitness' className='app__header-img' />
                <div className='app__header-pic-text-upper app__flex' style={lightImg === 0 ? { color: '#424946', background: 'rgba(255, 255, 255, 0.5)' } : { color: 'white' }}>
                    <p>Transfom Your Life with TSL,<br />Bringing the Gym to You!</p>
                </div>
                <div className='app__header-pic-text-lower app__flex' style={lightImg === 0 ? { color: '#303533', background: 'rgba(255, 255, 255, 0.5)' } : { color: 'white' }}>
                    Sign up ...
                </div>
            </div>
            <div className='app__header-lower'>
                <div className='app__header-lower-left app__flex'>
                    BMI Calculator
                </div>
                <div className='app__header-lower-middle app__flex'>
                    Fitness Test
                </div>
                <div className='app__header-lower-right app__flex'>
                    Blog
                </div>
            </div>
        </div>
    )
}

export default Header