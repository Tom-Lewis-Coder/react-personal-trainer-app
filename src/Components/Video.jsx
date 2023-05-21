import React from 'react'
import { Link } from 'react-router-dom'

const Video = ({ id, url, title }) => {
    return (
        <div className='app__video-component'>
            <Link to={`https://www.youtube.com/watch?v=${id}`} className='video-link'>
                <div className='app__video-style'>
                    <img src={url} alt='' className='app__video-img' />
                    <div className='app__video-title'>{title}</div>
                </div>
            </Link>
        </div>
    )
}
export default Video