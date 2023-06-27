import React, { useEffect } from 'react'
import { AboutComponent } from '../../Components';
import pic from '../../Assets/TSLimg1.jpg'
import content from '../../Constants/ServicesContent'

import './MuscleBuilding.scss'

const MuscleBuilding = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <AboutComponent title={'Muscle Building'} pic={pic} className={'app__muscleBuilding'} content={content} />
    </>
  )
}

export default MuscleBuilding