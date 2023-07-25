import React, { useState } from 'react'
import { Button } from '../Components'
import ExerciseList from '../Constants/ExerciseList'
import { v4 as uuidv4 } from 'uuid'

const WorkoutForm = () => {
  const [workout, setWorkout] = useState(['Press Workout to Start!!'])
  const [difficulty, setDifficulty] = useState('medium')

  const getDifficulty = (e) => {
    setDifficulty(e.target.value)
  }

  const getWorkout = () => {
    difficulty === 'low'
      ? setWorkout(
          ExerciseList[0].map(
            (subArr) => subArr[Math.floor(Math.random() * subArr.length)]
          )
        )
      : difficulty === 'medium'
      ? setWorkout(
          ExerciseList[1].map(
            (subArr) => subArr[Math.floor(Math.random() * subArr.length)]
          )
        )
      : setWorkout(
          ExerciseList[2].map(
            (subArr) => subArr[Math.floor(Math.random() * subArr.length)]
          )
        )
  }

  return (
    <>
      <form className="workout-form">
        <div className="workout-form-title">Choose Difficulty</div>
        <br />
        <input
          id="low"
          type="radio"
          name="radio"
          value="low"
          onChange={getDifficulty}
        />
        <label className="app__workoutRadio" htmlFor="low">
          Low
        </label>
        <input
          id="medium"
          type="radio"
          name="radio"
          value="medium"
          onChange={getDifficulty}
        />
        <label className="app__workoutRadio" htmlFor="medium">
          Med
        </label>
        <input
          id="high"
          type="radio"
          name="radio"
          value="high"
          onChange={getDifficulty}
        />
        <label className="app__workoutRadio" htmlFor="high">
          High
        </label>
        <p className="app__workoutap-p-text">
          Complete one circuit 3 times or change each time for a variation. Rest
          1 min between circuits.
        </p>
      </form>
      <Button
        title={'Workout'}
        onClick={getWorkout}
        className={'btn-default'}
      />
      <div className="workout-box">
        <div className="exercise">
          {workout.map((ex) => (
            <div key={uuidv4()} className="ex">
              {ex}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default WorkoutForm
