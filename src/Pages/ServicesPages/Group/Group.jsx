import React, { useEffect } from 'react'
import { ServicesComponent } from '../../../Components'
import pic from '../../../Assets/TSLimggroup.jpg'
import content from '../../../Constants/ServicesContent'

import './Group.scss'

const Group = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <ServicesComponent
                title={'Group Training'}
                pic={pic}
                className={'app__group'}
                content={content}
            />
        </>
    )
}

export default Group
