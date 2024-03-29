import React, { useEffect } from 'react'
import { AboutComponent } from '../../../Components'
import pic from '../../../Assets/TSLimg121.jpg'
import content from '../../../Constants/ServicesContent'

import '../AboutPages.scss'

const HealthAndWellbeing = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <AboutComponent
        title={'Health and Wellbeing'}
        pic={pic}
        className={'app__aboutpages'}
        content={content}
      />
    </>
  )
}

export default HealthAndWellbeing
