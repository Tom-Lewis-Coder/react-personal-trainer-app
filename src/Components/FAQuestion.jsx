import React, { useState, useEffect, useRef } from 'react'
import { FiMinus, FiPlus } from "react-icons/fi";
import PropTypes from 'prop-types'

const FAQuestion = ({ question, answer }) => {

    const [active, setActive] = useState(false)

    const contentRef = useRef(null)

    useEffect(() => {
        contentRef.current.style.height = active
            ? `${contentRef.current.scrollHeight + 5}px `
            : "0px";
    }, [contentRef, active]) // if active ref={contentRef} in div sets div height to scrollheight to display answer

    const toggleAccordion = () => {
        setActive(!active)
    }

    return (
        <>
            <div className="app__FAQ-component">
                <button onClick={toggleAccordion} >
                    <div>
                        <div className={active ? "app__FAQ-align-active" : "app__FAQ-align"}>
                            <FiPlus className={active ? 'app__FAQ-plus-hidden' : 'app__FAQ-plus'} />
                            <FiMinus className={active ? 'app__FAQ-minus' : 'app__FAQ-minus-hidden'} />
                            <h4 className="app__FAQ-style">{question}</h4>
                        </div>
                        <div ref={contentRef} className={active ? 'app__FAQ-answer' : 'app__FAQ-answer-hidden'} >
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
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
}

export default FAQuestion