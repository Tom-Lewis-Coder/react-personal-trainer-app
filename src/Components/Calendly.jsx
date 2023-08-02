import React from 'react'
import { PopupButton } from 'react-calendly'
import PropTypes from 'prop-types'

const Calendly = (props) => {
  return (
    <div className={props.className}>
      <PopupButton
        url="https://calendly.com/tslfitnessltd/30min"
        rootElement={document.getElementById('root')}
        text={props.text}
      />
    </div>
  )
}

Calendly.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string
}

export default Calendly
