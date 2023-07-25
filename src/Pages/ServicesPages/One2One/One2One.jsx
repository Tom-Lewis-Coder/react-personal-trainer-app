import React, { useEffect } from 'react'
import { ServicesComponent } from '../../../Components'
import pic from '../../../Assets/TSLimg121.jpg'
import content from '../../../Constants/ServicesContent'

import './One2One.scss'

const One2One = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <ServicesComponent
                title={'121 Training'}
                pic={pic}
                className={'app__one2one'}
                content={content}
            />
        </>
    )
}

export default One2One
