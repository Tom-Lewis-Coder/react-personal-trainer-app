import React from 'react'
import { Header } from '../../../Components'
import WorkoutForm from '../../../Forms/WorkoutForm'

import './WorkoutApp.scss'

function WorkoutApp() {
  return (
    <div className='app__workout-container' >
      <Header title={'Home Workout Generator'} className={'app__headTitle'} />
      <WorkoutForm />
    </div>
  )
}

export default WorkoutApp