import React from 'react'

import './Header.scss'

const Header = () => {
    return (
        <div className='app__header app-flex' id='home'>
            <div className='app__header-container app-flex'>
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
        </div>
    )
}

export default Header