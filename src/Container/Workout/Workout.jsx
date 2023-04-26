import React from 'react'
import WorkoutApp from './WorkoutApp/WorkoutApp'
import CalorieCalc from './CalorieCalc/CalorieCalc'

import './Workout.scss'

function Workout() {
    return (
        <div id='workout' className='app__workout'>
            <div className='app__workout-title'>Train and Track</div>
            <div className='app__workout-sections'>
                <WorkoutApp />
                <CalorieCalc />
            </div>
        </div>
    )
}

export default Workout