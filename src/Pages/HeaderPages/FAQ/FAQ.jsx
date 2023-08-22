import React, { useEffect, useRef } from 'react'
import { Header, FAQuestion, Button, Calendly } from '../../../Components'
import questions from '../../../Constants/Questions.json'
import { useNavigate } from 'react-router-dom'

import './FAQ.scss'

const FAQ = () => {
  const windowSize = useRef([window.innerWidth])
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="app__FAQ-container">
        <div className="app__FAQ-back">
          <Button onClick={goBack} title={'Back'} className={'app__FAQ-backbutton'} />
        </div>
        <Header title={'Frequently Asked Questions'} className={'app__FAQ-header'} />
        <div>
          {questions?.map((question) => {
            return (
              <FAQuestion question={question.question} answer={question.answer} key={question.id} />
            )
          })}
        </div>
        <Calendly
          text={
            windowSize.current[0] > 768 ? 'Click to book a free consultation' : 'Free consultation'
          }
        />
      </div>
    </>
  )
}

export default FAQ
