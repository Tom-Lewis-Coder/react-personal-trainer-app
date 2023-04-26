import React, { useState } from 'react'
import Header from '../../../Components/Header'
import WorkoutForm from '../../../Components/WorkoutForm'
import Button from '../../../Components/Button'
import WorkoutDisplay from '../../../Components/WorkoutDisplay'
import ExerciseList from '../../../Constants/ExerciseList'

import './WorkoutApp.scss'

function WorkoutApp() {

  const [workout, setWorkout] = useState(['Press Workout to Start!!'])
  const [difficulty, setDifficulty] = useState('medium')

  const getDifficulty = (e) => {
    setDifficulty(e.target.value)
  }

  const getWorkout = () => {
    difficulty === 'low' ? setWorkout(ExerciseList[0].map(subArr => subArr[Math.floor(Math.random() * subArr.length)])) :
      difficulty === 'medium' ? setWorkout(ExerciseList[1].map(subArr => subArr[Math.floor(Math.random() * subArr.length)])) :
        setWorkout(ExerciseList[2].map(subArr => subArr[Math.floor(Math.random() * subArr.length)]))
  }

  return (
    <div >
      <div className='container' >
        <Header title={'Home Workout Generator'} />
        <WorkoutForm title={'Choose Difficulty'} onChange={getDifficulty} />
        <Button title={'Workout'} onClick={getWorkout} className={'btn-default'} />
        <WorkoutDisplay workout={workout} />
      </div>
    </div>
  )
}

export default WorkoutApp