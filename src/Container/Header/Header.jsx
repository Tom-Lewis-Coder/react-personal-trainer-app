import React, { useState, useEffect } from 'react'
import { images } from '../../Constants'

import './Header.scss'

const Header = () => {
    const [headerImg, setHeaderImg] = useState(images[0])

    useEffect(() => {
        let count = 0
        const timer = setInterval(() => {
            count === 1 ? count = 0 : count = 1
            setHeaderImg(images[count])
        }, 6000)

        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <div className='app__header app-flex' id='home'>
            <img src={headerImg} alt='fitness' />
            <div className='app__header-top app-flex'>
                <div className='app__header-top-badge'>
                    TSL Fitness Inspirational Quote
                </div>
            </div>
            <div className='app__header-bottom app-flex'>
                <div className='app__header-bottom-sign-up'>
                    Sign up now ..
                </div>
            </div>
        </div>
    )
}

export default Header