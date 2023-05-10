import React, { useState, useEffect } from 'react'
import { headerImages } from '../../Constants'

import './Header.scss'

const Header = () => {
    const [headerImg, setHeaderImg] = useState(headerImages[0])

    useEffect(() => {
        let count = 0
        const timer = setInterval(() => {
            count === headerImages.length - 1 ? count = 0 : count++
            setHeaderImg(headerImages[count])
        }, 6000)

        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <div className='app__header app__flex' id='home'>
            <div className='app__header-top app__flex'>
                <img src={headerImg} alt='fitness' className='app__header-img' />
                <div className='app__header-pic-text-upper app__flex'>
                    TSL Fitness Inspirational Quote
                </div>
                <div className='app__header-pic-text-lower app__flex'>
                    Sign up now ...
                </div>
            </div>
            <div className='app__header-lower'>
                <div className='app__header-lower-left app__flex'>
                    BMI Calculator
                </div>
                <div className='app__header-lower-middle app__flex'>
                    Blog
                </div>
                <div className='app__header-lower-right app__flex'>
                    Videos
                </div>
            </div>
        </div>
    )
}

export default Header