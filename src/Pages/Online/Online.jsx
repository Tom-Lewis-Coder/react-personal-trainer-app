import React, { useEffect } from 'react'
import { ServicesComponent } from '../../Components';
import pic from '../../Assets/videos.jpg'
import content from '../../Constants/ServicesContent';

import './Online.scss'

const Online = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <ServicesComponent title={'Online Training'} pic={pic} className={'app__online'} content={content[0]} content1={content[1]} content2={content[2]} />
    </>
  )
}

export default Online
