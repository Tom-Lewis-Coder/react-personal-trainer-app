import React, { useState, useEffect } from 'react'

import reviewList from '../../Constants/ReviewsList'
import './Reviews.scss'
import Testamonials from '../../Components/Testamonials'

const Reviews = () => {

    const [review, setReview] = useState(reviewList[0])


    useEffect(() => {
        let count = 0
        const timer = setInterval(() => {
            count === reviewList.length - 1 ? count = 0 : count++
            setReview(reviewList[count])
        }, 6000)

        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <div id='reviews'>
            {<Testamonials name={review.Name} content={review.Content} stars={review.Stars}/>}
        </div>
    )
}

export default Reviews