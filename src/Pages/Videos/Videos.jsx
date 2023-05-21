import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Video, Header } from '../../Components'

import './Videos.scss'

let query = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${process.env.REACT_APP_YOUTUBE_CHANNEL_ID}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`


export const Videos = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const data = await axios.get(query)
            setData(data?.data?.items)
        }
        getData()
            .catch(console.error)
    }, [])

    return (
        <div className='app__video-section'>
            <Header title={'Videos'} className={'app__video-title'} />
            <div className='app__video-container app__flex'>
                {data?.map(vid => {
                    return <Video
                        key={vid?.id?.videoId}
                        id={vid?.id?.videoId}
                        url={vid?.snippet?.thumbnails?.default?.url}
                        title={vid?.snippet?.title}
                    />
                })}
            </div>
        </div>
    )
}

export default Videos
