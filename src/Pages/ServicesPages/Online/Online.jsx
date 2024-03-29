import React, { useEffect } from 'react'
import { ServicesComponent } from '../../../Components'
import pic from '../../../Assets/videos.jpg'
import content from '../../../Constants/ServicesContent'

import '../ServicePages.scss'

const Online = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <ServicesComponent
        title={'Online Training'}
        pic={pic}
        className={'app__servicepages'}
        content={content}
      />
    </>
  )
}

export default Online
