import React, { useState, useEffect } from 'react'
import { images } from '../../Constants'

import './Header.scss'

const Header = () => {
    const [headerImg, setHeaderImg] = useState(images[0])

    useEffect(() => {
        let count = 0
        const timer = setInterval(() => {
            count === images.length - 1 ? count = 0 : count++
            setHeaderImg(images[count])
        }, 6000)

        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <div className='app__header app__flex' id='home'>
            <img src={headerImg} alt='fitness' />
            <div className='app__header-top app__flex'>
                <div className='app__header-top-badge'>
                    TSL Fitness Inspirational Quote
                </div>
            </div>
            <div className='app__header-bottom app__flex'>
                <div className='app__header-bottom-sign-up'>
                    Sign up now ..
                </div>
            </div>
            <div className='app__header-lower'>
                <div className='app__header-lower-left app__flex'>
                    <h1 className='app__header-lower-left-text'>Left</h1>
                </div>
                <div className='app__header-lower-right app__flex'>
                    <h1 className='app__header-lower-right-text'>Right</h1>
                </div>
            </div>
        </div>
    )
}

export default Header