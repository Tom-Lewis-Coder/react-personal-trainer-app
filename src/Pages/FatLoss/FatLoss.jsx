import React, { useEffect } from 'react'
import { AboutComponent } from '../../Components';
import pic from '../../Assets/TSLimggroup.jpg'
import content from '../../Constants/ServicesContent'

import './FatLoss.scss'

const FatLoss = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <AboutComponent title={'Fat Loss'} pic={pic} className={'app__fatLoss'} content={content} />
    </>
  )
}

export default FatLoss
