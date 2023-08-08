import React from 'react'
import { Link } from 'react-router-dom'

import './Services.scss'
import { Header } from '../../Components'

const Services = () => {
  return (
    <div className="app__services app__flex" id="services">
      <Header title={'Plans and Pricing'} className={'app__services-title'} />
      <div className="app__services-split-container app__flex">
        <Link to="./one2one" className="app__services-service" key="one2one">
          <div className="app__services-img-121"></div>
          <div className="app__services-desc">1-2-1 Training</div>
          <p>Dedicated, bespoke support from your Personal Trainer.</p>
        </Link>
        <Link to="./group" className="app__services-service">
          <div className="app__services-img-group"></div>
          <div className="app__services-desc">Group Training</div>
          <p>Train in a group with friends or family for extra motivation and support.</p>
        </Link>
        <Link to="./online" className="app__services-service">
          <div className="app__services-img-online"></div>
          <div className="app__services-desc">Online coaching</div>
          <p>Convenient, flexible, effective online sessions are only a few clicks away.</p>
        </Link>
        <Link to="./corporate" className="app__services-service">
          <div className="app__services-img-corporate"></div>
          <div className="app__services-desc">Corporate training</div>
          <p>
            Ensure you have a happy, healthy, motivated work environment with our corporate options.
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Services
