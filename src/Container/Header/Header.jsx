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
            <img src={headerImg} alt='fitness' />
            <div className='app__header-top-upper app__flex'>
                TSL Fitness Inspirational Quote
            </div>
            <div className='app__header-top-bottom app__flex'>
                Sign up now ...
            </div>
            <div className='app__header-lower'>
                <div className='app__header-lower-left app__flex'>
                    Left
                </div>
                <div className='app__header-lower-middle app__flex'>
                    Middle
                </div>
                <div className='app__header-lower-right app__flex'>
                    Right
                </div>
            </div>
        </div>
    )
}

export default Header