import React from 'react'
import WorkoutApp from './WorkoutApp/WorkoutApp'
import CalorieCalc from './CalorieCalc/CalorieCalc'

import './Workout.scss'
import Header from '../../Components/Header'

function Workout() {
    return (
        <div id='workout' className='app__workout'>
            <Header title={'Train and Track'} className={'app__workout-title'} />
            <div className='app__workout-sections'>
                <WorkoutApp />
                <CalorieCalc />
            </div>
        </div>
    )
}

export default Workout