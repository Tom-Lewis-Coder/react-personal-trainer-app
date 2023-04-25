import React, { useState } from 'react'
import Header from './Components/Header'
import Form from './Components/Form'
import Button from './Components/Button'
import WorkoutDisplay from './Components/WorkoutDisplay'
import ExerciseList from './Constants/ExerciseList'

import './Workout.scss'

function Workout() {

  const [ workout, setWorkout ] = useState(['Press Workout to Start!!'])
  const [ difficulty, setDifficulty ] = useState('medium')

  const getDifficulty = (e) => {
    setDifficulty(e.target.value)
  }

  const getWorkout = () => { 
    difficulty === 'low' ? setWorkout(ExerciseList[0].map(subArr => subArr[Math.floor(Math.random() * subArr.length)])) : 
    difficulty === 'medium' ? setWorkout(ExerciseList[1].map(subArr => subArr[Math.floor(Math.random() * subArr.length)])) :
    setWorkout(ExerciseList[2].map(subArr => subArr[Math.floor(Math.random() * subArr.length)]))
  }

  return (
    <div className='app__workout' id='workout'>
      <div className='container' >
        <Header title={'Home Workout Generator'} />
        <Form title={'Choose Difficulty'} onChange={getDifficulty} />
        <Button title={'Workout'} onClick={getWorkout} />
        <WorkoutDisplay workout={workout} />
      </div>
    </div>
  )
}

export default Workout