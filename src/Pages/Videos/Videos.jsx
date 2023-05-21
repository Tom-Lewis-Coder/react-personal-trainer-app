import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Video } from '../../Components'

import './Videos.scss'

export const Videos = () => {

    const [data, setData] = useState([])

    const getData = async () => {
        await axios
            .get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${process.env.REACT_APP_YOUTUBE_CHANNEL_ID}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
            .then((res) => {
                setData(res?.data?.items)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            {data?.map(vid => {
                return <Video
                            key={vid?.id?.videoId}
                            id={vid?.id?.videoId}
                            url={vid?.snippet?.thumbnails?.default?.url}
                            title={vid?.snippet?.title}
                        />
            })}
        </div>
    )
}

export default Videos
