import React, { useEffect } from 'react'
import { ServicesComponent } from '../../../Components'
import pic from '../../../Assets/TSLimgAbout.jpg'
import content from '../../../Constants/ServicesContent'

import './Corporate.scss'

const Corporate = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <ServicesComponent
                title={'Corporate Training'}
                pic={pic}
                className={'app__corporate'}
                content={content}
            />
        </>
    )
}

export default Corporate
