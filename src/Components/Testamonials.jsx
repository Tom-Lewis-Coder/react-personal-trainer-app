import React from 'react'
import { ImStarFull, ImStarHalf } from 'react-icons/im'
import Header from './Header'
import PropTypes from 'prop-types'

const Testamonials = ({ name, content, stars, }) => {

    let fullStars = [<ImStarFull key={1} size={20} />, <ImStarFull key={2} size={20} />, <ImStarFull key={3} size={20} />, <ImStarFull key={4} size={20} />, <ImStarFull key={5} size={20} />]
    let starsArr = stars % 1 === 0.5 ? fullStars.slice(0, Math.floor(stars)).concat(<ImStarHalf key={6} size={20} />) : fullStars.slice(0, stars)

    return (
        <div className='app__testamonial-component'>
            <Header className={'app__testimonial-header'} title={'Reviews'} />
            <p data-testid='content' className='app__reviews-content'>{`"${content}"`}</p>
            <div data-testid='name' className='app__reviews-name'>- {name}</div>
            <div data-testid='starsArr' className='app__reviews-stars'>{starsArr}</div>
        </div>
    )
}

Testamonials.propTypes = {
    content: PropTypes.string,
    name: PropTypes.string,
    starsArr: PropTypes.array,
}

export default Testamonials