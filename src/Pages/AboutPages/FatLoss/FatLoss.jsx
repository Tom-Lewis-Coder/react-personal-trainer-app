import React, { useEffect } from 'react'
import { AboutComponent } from '../../../Components'
import pic from '../../../Assets/fatloss.jpg'
import content from '../../../Constants/ServicesContent'

import '../AboutPages.scss'

const FatLoss = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <AboutComponent
        title={'Fat Loss'}
        pic={pic}
        className={'app__aboutpages'}
        content={content}
      />
    </>
  )
}

export default FatLoss
