import React from 'react'
import { Link } from 'react-router-dom'

import './About.scss'
import { Header } from '../../Components'

const About = () => {
  return (
    <div className="app__about app__flex" id="about">
      <Header title={'The TSL System'} className={'app__about-title'} />
      <div className="app__about-system">Working Together to Accomplish Your Goals.</div>
      <div className="app__about-tsl app__flex">
        <div className="app__about-hero-img"></div>
        <p>Big Me Text</p>
      </div>
      <div className="app__about-split-container ">
        <div className="app__about-box">
          <div className="app__about-image"></div>
          <p className="app__about-caption">
            <span>Fat Loss</span>
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          </p>
          <Link to="./fatloss" className="app__about-link">
            Learn More
          </Link>
        </div>
        <div className="app__about-box">
          <div className="app__about-image-1"></div>
          <p className="app__about-caption">
            <span>Health and Wellbeing</span>
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          </p>
          <Link to="./healthandwellbeing" className="app__about-link">
            Learn More
          </Link>
        </div>
        <div className="app__about-box">
          <div className="app__about-image-2"></div>
          <p className="app__about-caption">
            <span>Muscle Building</span>
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          </p>
          <Link to="./musclebuilding" className="app__about-link">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
