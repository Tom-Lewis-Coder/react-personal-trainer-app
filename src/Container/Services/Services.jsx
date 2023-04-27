import React from 'react'

import './Services.scss'
import Header from '../../Components/Header'

const Services = () => {
  return (
    <div className='app__services app__flex' id='services'>
      <Header title={'Programmes'} className={'app__services-title'}/>
      <div className='app__services-split-container app__flex'>
        <div className='app__services-left'>
          <div className='app__services-img-121'></div>
          <div>1-2-1 Training in Person or Virtually</div>
          <p>Dedicated, bespoke support from your Personal Trainer.</p>
        </div>
        <div className='app__services-right'>
          <div className='app__services-img-stretch'></div>
          <div>Group Training</div>
          <p>Train with friends or family for extra motivation.</p>
        </div>
      </div>
    </div>
  )
}

export default Services