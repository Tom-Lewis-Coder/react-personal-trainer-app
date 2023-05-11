import React from 'react'
import { ImStarFull, ImStarHalf } from 'react-icons/im'

const Testamonials = ({ name, content, stars, }) => {

    let fullStars = [<ImStarFull key={1} size={20} />, <ImStarFull key={2} size={20} />, <ImStarFull key={3} size={20} />, <ImStarFull key={4} size={20} />, <ImStarFull key={5} size={20} />]
    let starsArr = stars % 1 === 0.5 ? fullStars.slice(0, Math.floor(stars)).concat(<ImStarHalf key={6} size={20} />) : fullStars.slice(0, stars)

    return (
        <div className='app__testamonial-component'>
            <p className='app__reviews-content'>{content}</p>
            <div className='app__reviews-name'>- {name}</div>
            <div className='app__reviews-stars'>{starsArr}</div>
        </div>
    )
}

export default Testamonials