import React, { useEffect } from 'react'
import { ServicesComponent } from '../../../Components'
import pic from '../../../Assets/TSLimgAbout.jpg'
import content from '../../../Constants/ServicesContent'

import '../ServicePages.scss'

const Corporate = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <ServicesComponent
        title={'Corporate Training'}
        pic={pic}
        className={'app__servicepages'}
        content={content}
      />
    </>
  )
}

export default Corporate
