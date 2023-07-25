import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { HashLink } from 'react-router-hash-link'

import './FitnessTest.scss'
import { Button, Header } from '../../../Components'

const FitnessTest = () => {
  const [fitForm, setFitForm] = useState({
    q1: 0,
    q2: 0,
    q3: 0,
    q4: 0,
    q5: 0,
    q6: 0,
    q7: 0,
    q8: 0,
    q9: 0,
    q10: 0,
    q11: 0,
    q12: 0
  })
  const [fitFormResult, setFitFormResult] = useState(0)
  const [caption, setCaption] = useState('')

  const { q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12 } = fitForm

  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleFitFormChange = (e) => {
    const { name, value } = e.target
    setFitForm({ ...fitForm, [name]: value })
  }

  const handleFitFormSubmit = (e) => {
    e.preventDefault()
    if (
      q1 === 0 ||
      q2 === 0 ||
      q3 === 0 ||
      q4 === 0 ||
      q5 === 0 ||
      q6 === 0 ||
      q7 === 0 ||
      q8 === 0 ||
      q9 === 0 ||
      q10 === 0 ||
      q11 === 0 ||
      q12 === 0
    ) {
      alert('Please ensure all fields are entered')
    } else {
      let score =
        Number(q1) +
        Number(q2) +
        Number(q3) +
        Number(q4) +
        Number(q5) +
        Number(q6) +
        Number(q7) +
        Number(q8) +
        Number(q9) +
        Number(q10) +
        Number(q11) +
        Number(q12)
      if (score < 100) {
        setCaption(
          'Poor. There are muiltiple aspects of your lifestlye that are holding you back from being a healthy individual. Get in touch to find out how I can help you transform into a fitter, happier you.'
        )
      } else if (score < 140) {
        setCaption(
          'Below Average. There is significant room for improvement. Get in touch and find out how I can help you transform into a healthier, happier you.'
        )
      } else if (score < 180) {
        setCaption(
          'Average. You have a lifestyle that is on par with most of the population. Get in touch if you would like to improve it.'
        )
      } else if (score < 220) {
        setCaption(
          'Above average. You have a lifestlye that is healthier than most. Well done! However, there looks like there is room for improvement. If you would like any training advice or lifestyle coaching, get in touch.'
        )
      } else {
        setCaption(
          'Excellent. You have a very healthy lifestyle, keep up the good work!! If you would like any training advice, or advice on ways in which you could finetune all aspects of your lifestyle for optimum health, get in touch.'
        )
      }
      setFitFormResult(score)
    }
  }

  return (
    <div className="app__fitForm">
      <div className="app__fitform-back">
        <Button
          title={'Back'}
          onClick={goBack}
          className={'app__fitform-backbutton'}
        />
      </div>
      <Header title={'Fitness Assessment'} className={'app__fitform-header'} />
      <form className="app__fitform-form">
        <label>How often do you exercise?</label>
        <select
          name="q1"
          onChange={handleFitFormChange}
          value={q1}
          className="app__fitform-input"
        >
          <option value={0}>Select one...</option>
          <option value={20}>Over once per week</option>
          <option value={12}>Weekly</option>
          <option value={7}>Monthly</option>
          <option value={3}>Never</option>
        </select>
        <label>How would you consider yourself?</label>
        <select
          name="q2"
          onChange={handleFitFormChange}
          value={q2}
          className="app__fitform-input"
        >
          <option value={0}>Select one...</option>
          <option value={20}>Ideal weight</option>
          <option value={11}>Underweight</option>
          <option value={10}>Overweight</option>
          <option value={3}>Very Overweight</option>
        </select>
        <label>How many hours sleep do you get nightly?</label>
        <select
          name="q3"
          onChange={handleFitFormChange}
          value={q3}
          className="app__fitform-input"
        >
          <option value={0}>Select one...</option>
          <option value={20}>8 or more hours</option>
          <option value={15}>Around 7 Hours</option>
          <option value={10}>Around 6 Hours</option>
          <option value={3}>Less than 6</option>
        </select>
        <label>How would you describe your daily work life?</label>
        <select
          name="q4"
          onChange={handleFitFormChange}
          value={q4}
          className="app__fitform-input"
        >
          <option value={0}>Select one...</option>
          <option value={20}>Low stress</option>
          <option value={15}>Moderate Stress</option>
          <option value={10}>Stressfull</option>
          <option value={3}>Very Stressfull</option>
        </select>
        <label>How would you describe your diet?</label>
        <select
          name="q5"
          onChange={handleFitFormChange}
          value={q5}
          className="app__fitform-input"
        >
          <option value={0}>Select one...</option>
          <option value={20}>Balanced and nutritional</option>
          <option value={15}>Fairly balanced with some indulgences</option>
          <option value={10}>Indulgent with some balanced</option>
          <option value={3}>All over the shop</option>
        </select>
        <label>How often do you consume alcohol?</label>
        <select
          name="q6"
          onChange={handleFitFormChange}
          value={q6}
          className="app__fitform-input"
        >
          <option value={0}>Select one...</option>
          <option value={20}>Never</option>
          <option value={19}>Occasionally</option>
          <option value={14}>Once per week</option>
          <option value={5}>2 or more times per week</option>
          <option value={1}>More then 4x per week</option>
        </select>
        <label>Do you pay attention to your step count?</label>
        <select
          name="q7"
          onChange={handleFitFormChange}
          value={q7}
          className="app__fitform-input"
        >
          <option value={0}>Select one...</option>
          <option value={20}>Yes daily</option>
          <option value={18}>Most days</option>
          <option value={7}>Sometimes</option>
          <option value={3}>Never</option>
        </select>
        <label>Do you smoke or vape?</label>
        <select
          name="q8"
          onChange={handleFitFormChange}
          value={q8}
          className="app__fitform-input"
        >
          <option value={0}>Select one...</option>
          <option value={20}>Never</option>
          <option value={10}>Occasionally</option>
          <option value={5}>Quite often</option>
          <option value={1}>Everyday</option>
        </select>
        <label>Can you touch your toes?</label>
        <select
          name="q9"
          onChange={handleFitFormChange}
          value={q9}
          className="app__fitform-input"
        >
          <option value={0}>Select one...</option>
          <option value={20}>Yes comfortably</option>
          <option value={15}>Almost</option>
          <option value={7}>Past the knee</option>
          <option value={3}>Nowhere near</option>
        </select>
        <label>Are you confident you could run 1 mile uninterupted?</label>
        <select
          name="q10"
          onChange={handleFitFormChange}
          value={q10}
          className="app__fitform-input"
        >
          <option value={0}>Select one...</option>
          <option value={20}>Yes comfortably</option>
          <option value={15}>Just about</option>
          <option value={10}>Maybe with one or two stops</option>
          <option value={3}>Definately not</option>
        </select>
        <label>Can you perform 5 press ups unassisted?</label>
        <select
          name="q11"
          onChange={handleFitFormChange}
          value={q11}
          className="app__fitform-input"
        >
          <option value={0}>Select one...</option>
          <option value={20}>Yes comfortably</option>
          <option value={15}>Just about</option>
          <option value={10}>No but I can do at least one</option>
          <option value={3}>I cant do one</option>
        </select>
        <label>
          Do you have any chronic illness or pain? ie a condition that has been
          present for over 1 year
        </label>
        <select
          name="q12"
          onChange={handleFitFormChange}
          value={q12}
          className="app__fitform-input"
        >
          <option value={0}>Select one...</option>
          <option value={20}>No</option>
          <option value={3}>Yes</option>
        </select>
        <Button
          title={'Submit'}
          onClick={handleFitFormSubmit}
          className={'app__fitform-submit-button'}
        />
        <div className="app__fitform-result-display">
          <p>
            {fitFormResult ? `You scored ${fitFormResult} : ${caption}` : ''}
          </p>
          {fitFormResult ? (
            <HashLink smooth to="/#getInTouch">
              <button className="app__fitform-getintouch-button">
                Get in Touch
              </button>
            </HashLink>
          ) : (
            ''
          )}
        </div>
      </form>
    </div>
  )
}

export default FitnessTest
