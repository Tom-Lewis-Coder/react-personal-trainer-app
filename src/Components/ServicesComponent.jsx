import React, { useRef } from 'react'
import { useNavigate } from 'react-router'
import { Header, Button, Calendly } from '.'
import PropTypes from 'prop-types'

const ServicesComponent = ({ title, className, pic, content }) => {
  const windowSize = useRef([window.innerWidth])

  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  const contentSplit = content.map((para, i) => {
    return (
      <p className={className + '-content'} key={i}>
        {para}
      </p>
    )
  })

  return (
    <div className={className + '-container'}>
      <div className={className + '-back'}>
        <Button onClick={goBack} title={'Back'} className={className + '-backbutton'} />
      </div>
      <img src={pic} alt={title} className={className + '-img'} />
      <Header title={title} className={className + '-title'} />
      <div className={className + '-divider'} />
      {contentSplit}
      <div className={className + '-divider'} />
      <Calendly
        text={
          windowSize.current[0] > 768 ? 'Click to book a free consultation' : 'Free consultation'
        }
      />
    </div>
  )
}

ServicesComponent.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  pic: PropTypes.string,
  content: PropTypes.array,
  para: PropTypes.string
}

export default ServicesComponent
