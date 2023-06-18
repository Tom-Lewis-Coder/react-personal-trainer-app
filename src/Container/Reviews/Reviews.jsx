import React, { useState, useEffect } from 'react'

import reviewList from '../../Constants/ReviewsList'
import './Reviews.scss'
import { Testamonials } from '../../Components'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Reviews = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [review, setReview] = useState(reviewList[0])

    useEffect(() => {
        let count = 0
        const timer = setInterval(() => {
            count === reviewList.length - 1 ? count = 0 : count++
            setReview(reviewList[count])
            setCurrentIndex(count)
        }, 6000)
        return () => {
            clearInterval(timer)
        }
    }, [])

    const handleClick = (index) => {
        setCurrentIndex(index)
        setReview(reviewList[index])
    }

    return (
        <div id='reviews' className='app__testamonial'>
            <div onClick={() => handleClick(currentIndex === 0 ? reviewList.length - 1 : currentIndex - 1)}>
                <FaChevronLeft size={32} className='app__review-chevron'/>
            </div>
            <Testamonials name={review.Name} content={review.Content} stars={review.Stars} />
            <div onClick={() => handleClick(currentIndex === reviewList.length - 1 ? 0 : currentIndex + 1)}>
                <FaChevronRight size={32} className='app__review-chevron'/>
            </div>
        </div>
    )
}

export default Reviews