import React, { useEffect } from 'react'
import { AboutComponent } from '../../../Components'
import pic from '../../../Assets/TSLimggroup.jpg'
import content from '../../../Constants/ServicesContent'

import '../AboutPages.scss'

const Cardiovascular = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <AboutComponent
        title={'Cardiovascular Fitness'}
        pic={pic}
        className={'app__aboutpages'}
        content={content}
      />
    </>
  )
}

export default Cardiovascular
