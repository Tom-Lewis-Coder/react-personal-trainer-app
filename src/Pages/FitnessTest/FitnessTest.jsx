import React, { useState } from 'react'

import './FitnessTest.scss'
import { Button } from '../../Components'

const FitnessTest = () => {

  const [fitForm, setFitForm] = useState({ q1: 0, q2: 0, q3: 0, q4: 0, q5: 0, q6: 0, q7: 0, q8: 0 })
  const [fitFormResult, setFitFormResult] = useState(0)

  const { q1, q2, q3, q4, q5, q6, q7, q8 } = fitForm

  const handleFitFormChange = e => {
    const { name, value } = e.target
    setFitForm({ ...fitForm, [name]: value })
  }

  const handleFitFormSubmit = e => {
    e.preventDefault()
    if (q1 === 0 || q2 === 0 || q3 === 0 || q4 === 0 || q5 === 0 || q6 === 0 || q7 === 0 || q8 === 0) {
      alert('Please ensure all fields are entered')
    } else {
      let score = Number(q1) + Number(q2) + Number(q3) + Number(q4) + Number(q5) + Number(q6) + Number(q7) + Number(q8)
      setFitFormResult(score)
    }
  }

  return (
    <form className='app__fitForm'>
      <label>How often do you exercise?</label>
      <select name="q1" onChange={handleFitFormChange} value={q1} className='app__fitform-input'>
        <option value={0}>Select one...</option>
        <option value={20}>Over once per week</option>
        <option value={15}>Weekly</option>
        <option value={10}>Monthly</option>
        <option value={5}>Never</option>
      </select>
      <label>How would you consider yourself?</label>
      <select name="q2" onChange={handleFitFormChange} value={q2} className='app__fitform-input'>
        <option value={0}>Select one...</option>
        <option value={20}>Ideal weight</option>
        <option value={15}>Underweight</option>
        <option value={10}>Overweight</option>
        <option value={5}>Very Overweight</option>
      </select>
      <label>How many hours sleep do you get nightly?</label>
      <select name="q3" onChange={handleFitFormChange} value={q3} className='app__fitform-input'>
        <option value={0}>Select one...</option>
        <option value={20}>8 or more hours</option>
        <option value={15}>Around 7 Hours</option>
        <option value={10}>Around 6 Hours</option>
        <option value={5}>Less than 6</option>
      </select>
      <label>How would you describe your daily work life?</label>
      <select name="q4" onChange={handleFitFormChange} value={q4} className='app__fitform-input'>
        <option value={0}>Select one...</option>
        <option value={20}>Low stress</option>
        <option value={15}>Moderate Stress</option>
        <option value={10}>Stressfull</option>
        <option value={5}>Very Stressfull</option>
      </select>
      <label>How would you describe your diet?</label>
      <select name="q5" onChange={handleFitFormChange} value={q5} className='app__fitform-input'>
        <option value={0}>Select one...</option>
        <option value={20}>Balanced and nutritional</option>
        <option value={15}>Fairly balanced with some indulgences</option>
        <option value={10}>Indulgent with some balanced</option>
        <option value={5}>All over the shop</option>
      </select>
      <label>How often do you consume alcohol?</label>
      <select name="q6" onChange={handleFitFormChange} value={q6} className='app__fitform-input'>
        <option value={0}>Select one...</option>
        <option value={20}>Rarely</option>
        <option value={15}>Once per week</option>
        <option value={10}>More then 2x per week</option>
        <option value={5}>More then 4x per week</option>
      </select>
      <label>Do you pay attention to your step count?</label>
      <select name="q7" onChange={handleFitFormChange} value={q7} className='app__fitform-input'>
        <option value={0}>Select one...</option>
        <option value={20}>Yes daily</option>
        <option value={15}>Sometimes</option>
        <option value={10}>Rarely</option>
        <option value={5}>Never</option>
      </select>
      <label>Do you smoke or vape?</label>
      <select name="q8" onChange={handleFitFormChange} value={q8} className='app__fitform-input'>
        <option value={0}>Select one...</option>
        <option value={20}>Never</option>
        <option value={15}>Occasionally</option>
        <option value={10}>Quite often</option>
        <option value={5}>Everyday</option>
      </select>
      <Button title={'Calculate'} onClick={handleFitFormSubmit} className={''} />
      <div className="">
        <p>{fitFormResult ? `You scored ${fitFormResult}`  : ''} </p>
      </div>
    </form>
  )
}

export default FitnessTest