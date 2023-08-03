import React from 'react'
import WorkoutApp from './WorkoutApp/WorkoutApp'
import CalorieCalc from './CalorieCalc/CalorieCalc'

import './Workout.scss'
import { Header } from '../../Components'

function Workout() {
  return (
    <div id="track & train" className="app__workout">
      <Header title={'Track and Train'} className={'app__workout-title'} />
      <div className="app__workout-sections">
        <CalorieCalc />
        <WorkoutApp />
      </div>
      <p className="app__workout-disclaimer">
        * Consult your physician before starting any exercise program or changing your diet. Stop
        exercising immediately if you experience pain, shortness of breath, dizziness,
        lightheadedness, blurred vision, headache, nausea, or any other discomfort.
      </p>
    </div>
  )
}

export default Workout
