import React, { useState } from 'react'
import { Button } from '../Components'

const CalorieForm = () => {
  const [form1Data, setForm1Data] = useState({
    age: '',
    height: '',
    weight: '',
    activity: '1'
  })
  const [form2Data, setForm2Data] = useState({
    weightGoal: '',
    timeFrame: ''
  })
  const [form1Result, setForm1Result] = useState(0)
  const [form2Result, setForm2Result] = useState(0)
  const [gender, setGender] = useState('')

  const { age, height, weight, activity } = form1Data
  const { weightGoal, timeFrame } = form2Data

  const handleForm1Change = (e) => {
    const { name, value } = e.target
    setForm1Data({ ...form1Data, [name]: value })
  }

  const getGender = (e) => {
    setGender(e.target.value)
  }

  const handleForm1Submit = (e) => {
    e.preventDefault()
    if (age === '' || gender === '' || height === '' || weight === '') {
      alert('Please ensure all fields are entered')
    } else {
      let result1 = Math.floor(
        (weight * 10 +
          height * 6.25 -
          age * 5 +
          (gender === 'male' ? 5 : -161)) *
          activity
      )
      setForm1Result(result1)
    }
  }

  const handleForm2Change = (e) => {
    const { name, value } = e.target
    setForm2Data({ ...form2Data, [name]: value })
  }

  const handleForm2Submit = (e) => {
    e.preventDefault()
    if (weightGoal === '' || timeFrame === '' || form1Result === '') {
      alert(
        'Please ensure all fields are entered and the first form is completed'
      )
    } else {
      let result2 =
        Math.round(((weightGoal - weight) * 7700) / (timeFrame * 30)) +
        form1Result
      setForm2Result(result2)
    }
  }

  return (
    <>
      <form>
        <div className="app__calCalc-1">
          <label htmlFor="age">Age: </label>
          <input
            className="app__input"
            id="age"
            type="number"
            name="age"
            min="15"
            max="80"
            value={age}
            onChange={handleForm1Change}
          />
          <br />
          <input
            id="male"
            type="radio"
            name="radio"
            value="male"
            onChange={getGender}
          />
          <label className="app__gender-input" htmlFor="male">
            {' '}
            Male
          </label>
          <input
            id="female"
            type="radio"
            name="radio"
            value="female"
            onChange={getGender}
          />
          <label className="app__gender-input" htmlFor="female">
            {' '}
            Female
          </label>
          <label htmlFor="height">Height: </label>
          <input
            className="app__input"
            id="height"
            placeholder="cm"
            type="number"
            name="height"
            value={height}
            onChange={handleForm1Change}
          />
          <br />
          <label htmlFor="weight">Weight: </label>
          <input
            className="app__input"
            id="weight"
            placeholder="KG"
            type="number"
            name="weight"
            value={weight}
            onChange={handleForm1Change}
          />
          <br />
          <label htmlFor="activity">Activity level:</label>
          <select
            name="activity"
            onChange={handleForm1Change}
            value={activity}
            className="app__activity-input"
            id="activity"
          >
            <option value="1">BMR (Basal Metabolic Rate) No activity</option>
            <option value="1.2">Sedentary: little to no activity</option>
            <option value="1.375">Light: exercise 1/3 x per week</option>
            <option value="1.465">Moderate: exercise 4/5 x per week</option>
            <option value="1.55">
              Active: daily exercise or intense 3/4 x per week
            </option>
            <option value="1.725">Very: intense exercise 6/7 x per week</option>
            <option value="1.9">Extremely: intense exercise/job daily</option>
          </select>
        </div>
        <Button
          title={'Calculate'}
          onClick={handleForm1Submit}
          className={'btn-default'}
        />
        <div className="results-container">
          <p>
            {form1Result
              ? `Maintain weight with ~ ${form1Result} kcals a day.`
              : ''}{' '}
          </p>
        </div>
      </form>
      <form>
        <div className="app__calorieCalc-2">
          <label htmlFor="weightGoal">Weight Goal: </label>
          <input
            className="app__input"
            id="weightGoal"
            type="number"
            placeholder="KG"
            name="weightGoal"
            value={weightGoal}
            onChange={handleForm2Change}
          />
          <br />
          <label htmlFor="timeFrame">Time Frame: </label>
          <input
            className="app__input"
            id="timeFrame"
            type="number"
            placeholder="Months"
            name="timeFrame"
            min="2"
            value={timeFrame}
            onChange={handleForm2Change}
          />
        </div>
        <Button
          title={'Calculate'}
          onClick={handleForm2Submit}
          className={'btn-default'}
        />
        <div className="results-container">
          <p>
            {form2Result
              ? `Reach ~ ${form2Result} kcals a day to achieve goal.`
              : ''}{' '}
          </p>
        </div>
      </form>
    </>
  )
}

export default CalorieForm
