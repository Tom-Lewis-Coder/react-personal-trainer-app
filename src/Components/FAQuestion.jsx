import React, { useState, useEffect, useRef } from 'react'
import { FiPlus } from "react-icons/fi";

const FAQuestion = ({ question, answer }) => {

    const [active, setActive] = useState(false)

    const contentRef = useRef(null)

    useEffect(() => {
        contentRef.current.style.maxHeight = active
            ? `${contentRef.current.scrollHeight}px`
            : "0px";
    }, [contentRef, active])

    const toggleAccordion = () => {
        setActive(!active)
    }

    return (
        <>
            <div className="app__FAQ-component">
                <button
                    className={`app__FAQ-section ${active}`}
                    onClick={toggleAccordion}
                >
                    <div>
                        <div className={active ? "app__FAQ-align-active": "app__FAQ-align"}>
                            <FiPlus
                                className={active ? 'app__FAQ-icon' : 'app__FAQ-icon'}
                            />
                            <h4 className="app__FAQ-style">
                                {question}
                            </h4>
                        </div>
                        <div
                            ref={contentRef}
                            className={active ? 'app__FAQ-answer' : 'app__FAQ-answer-hidden'}
                        >
                            <p>{answer}</p>
                        </div>
                    </div>
                </button>
            </div>
        </>
    )
}

export default FAQuestion