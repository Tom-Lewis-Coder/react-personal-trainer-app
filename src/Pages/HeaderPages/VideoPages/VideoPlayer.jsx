import React, { useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Header, Calendly } from '../../../Components'

const VideoPlayer = () => {
  const location = useLocation()
  const { id } = location.state

  const windowSize = useRef([window.innerWidth])
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  return (
    <div className="app__videoplayer-section">
      <Header title={'TSL Fitness'} className={'app__videoplayer-title'} />
      <div className="app__videoplayer-back">
        <Button onClick={goBack} title={'Back'} className={'app__videoplayer-button'} />
      </div>
      <div className="app__videoplayer-video-container">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title="Youtube player"
          className="app__videoplayer-video"
          sandbox="allow-scripts allow-same-origin allow-presentation"
        ></iframe>
      </div>
      <Calendly
        text={
          windowSize.current[0] > 768 ? 'Click to book a free consultation' : 'Free consultation'
        }
      />
    </div>
  )
}

export default VideoPlayer
