import React from 'react'
import { Header, FAQuestion } from '../../Components'
import questions from '../../Constants/Questions.json'

import './FAQ.scss'

const FAQ = () => {
  return (
    <>
      <div className='app__FAQ-container'>
        <Header title={'Frequently Asked Questions'} className={'app__FAQ-header'} />
        <div>
          {questions?.map(question => {
            return <FAQuestion
              question={question.question}
              answer={question.answer}
              key={question.id}
            />
          })}
        </div>
      </div>
    </>
  )
}

export default FAQ