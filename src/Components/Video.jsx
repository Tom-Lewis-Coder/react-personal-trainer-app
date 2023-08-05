import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Video = ({ id, url, title }) => {
  return (
    <div className="app__video-component">
      <Link to={'./videoplayer'} state={{ id: id }} className="app__video-link">
        <div className="app__video-style">
          <img src={url} alt={title} className="app__video-img" />
          <div className="app__video-component-title">{title}</div>
        </div>
      </Link>
    </div>
  )
}

Video.propTypes = {
  id: PropTypes.string,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Video
