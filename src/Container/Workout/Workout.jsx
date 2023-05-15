import React from 'react'
import WorkoutApp from './WorkoutApp/WorkoutApp'
import CalorieCalc from './CalorieCalc/CalorieCalc'

import './Workout.scss'
import Header from '../../Components/Header'

function Workout() {
    return (
        <div id='workout' className='app__workout'>
            <Header title={'Track and Train'} className={'app__workout-title'} />
            <div className='app__workout-sections'>
                <CalorieCalc />
                <WorkoutApp />
            </div>
        </div>
    )
}

export default Workout