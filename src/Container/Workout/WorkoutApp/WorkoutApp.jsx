import React, { useState } from 'react'
import Header from '../../../Components/Header'
import WorkoutForm from '../../../Forms/WorkoutForm'
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
      <div className='app__workout-container' >
        <Header title={'Home Workout Generator'} className={'app__headTitle'} />
        <WorkoutForm title={'Choose Difficulty'} onChange={getDifficulty} />
        <Button title={'Workout'} onClick={getWorkout} className={'btn-default'} />
        <WorkoutDisplay workout={workout} />
      </div>
  )
}

export default WorkoutApp