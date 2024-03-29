import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { Video, Header, Button, Loading, Calendly } from '../../../Components'
import { useNavigate } from 'react-router-dom'

import './Videos.scss'

let query = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${process.env.REACT_APP_YOUTUBE_CHANNEL_ID}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&maxResults=10`

export const Videos = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const windowSize = useRef([window.innerWidth])

  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(query)
      setData(data?.data?.items)
      setLoading(false)
      window.scrollTo(0, 0)
    }
    getData().catch(console.error)
  }, [])

  return (
    <div className="app__video-section">
      <div className="app__video-back">
        <Button onClick={goBack} title={'Back'} className={'app__video-backbutton'} />
      </div>
      <Header title={'Videos'} className={'app__video-title'} />
      <div className="app__video-container app__flex">
        {loading ? (
          <Loading />
        ) : (
          data?.map((vid) => {
            return (
              <Video
                key={vid?.id?.videoId}
                id={vid?.id?.videoId}
                url={vid?.snippet?.thumbnails?.default?.url}
                title={vid?.snippet?.title}
              />
            )
          })
        )}
      </div>
      <Calendly
        text={
          windowSize.current[0] > 768 ? 'Click to book a free consultation' : 'Free consultation'
        }
      />
    </div>
  )
}

export default Videos
