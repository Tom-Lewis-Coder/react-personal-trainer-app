import React, { useEffect } from 'react'
import { ServicesComponent } from '../../Components';
import pic from '../../Assets/TSLimgAbout.jpg'
import content from '../../Constants/ServicesContent';

import './Corporate.scss'

const Corporate = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <ServicesComponent title={'Corporate Training'} pic={pic} className={'app__corporate'} content={content[0]} content1={content[1]} content2={content[2]} />
    </>
  )
}

export default Corporate
