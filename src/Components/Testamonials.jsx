import React from 'react'
import { ImStarFull, ImStarHalf } from 'react-icons/im'

const Testamonials = ({ name, content, stars }) => {
    
    let fullStars = [...Array(Math.floor(stars)).fill(<ImStarFull size={24}/>)]
    let halfStars = [...Array(Math.ceil(stars % 1)).fill(<ImStarHalf size={24}/>)]
    let starsArr = fullStars.concat(halfStars) 

    return (
        <div className='app__testamonial-component'>
            <p className='app__reviews-content'>{content}</p>
            <div className='app__reviews-name'>- {name}</div>
            <div className='app__reviews-stars'>{starsArr}</div>
        </div>
    )
}

export default Testamonials