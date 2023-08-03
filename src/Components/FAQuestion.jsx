import React, { useState, useEffect, useRef } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import PropTypes from 'prop-types'

const FAQuestion = ({ question, answer }) => {
  const [active, setActive] = useState(false)

  const contentRef = useRef(null)

  useEffect(() => {
    contentRef.current.style.height = active ? `${contentRef.current.scrollHeight + 5}px ` : '0px'
  }, [contentRef, active]) // if active ref={contentRef} in div sets div height to scrollheight to display answer

  const toggleAccordion = () => {
    setActive(!active)
  }

  return (
    <>
      <div className="app__FAQ-component">
        <button onClick={toggleAccordion}>
          <div>
            <div className={active ? 'app__FAQ-align-active' : 'app__FAQ-align'}>
              <FiMinus
                data-testid="minus"
                className="app__FAQ-svg"
                style={!active ? { visibility: 'hidden' } : { visibility: 'visible' }}
              />
              <FiPlus
                data-testid="plus"
                className="app__FAQ-svg"
                style={active ? { visibility: 'hidden' } : { visibility: 'visible' }}
              />
              <h4 className="app__FAQ-style">{question}</h4>
            </div>
            <div
              ref={contentRef}
              data-testid="answer"
              className="app__FAQ-answer"
              style={!active ? { visibility: 'hidden' } : { visibility: 'visible' }}
            >
              <p>{answer}</p>
            </div>
          </div>
        </button>
      </div>
    </>
  )
}

FAQuestion.propTypes = {
  className: PropTypes.string,
  toggleAccordion: PropTypes.func,
  question: PropTypes.string,
  answer: PropTypes.string
}

export default FAQuestion
