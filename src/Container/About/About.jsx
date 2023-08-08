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
            Achieve long term fat loss results with our fast and effective programmes.{' '}
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
            Our 5 point holisitc approach can help you lead a healthier, balanced lifestyle.{' '}
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
            Increase muscle mass quickly and safely with our expert knowledge and experience.{' '}
          </p>
          <Link to="./musclebuilding" className="app__about-link">
            Learn More
          </Link>
        </div>
        <div className="app__about-box">
          <div className="app__about-image-3"></div>
          <p className="app__about-caption">
            <span>Cardiovascular Fitness</span>
            <br />
            <br />
            Increase stamina and endurance to help improve heart, health, and lung function..{' '}
          </p>
          <Link to="./Cardiovascular" className="app__about-link">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
