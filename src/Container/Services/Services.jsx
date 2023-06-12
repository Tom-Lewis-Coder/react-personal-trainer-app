import React from 'react'

import './Services.scss'
import { Header } from '../../Components'

const Services = () => {
  return (
    <div className='app__services app__flex' id='services'>
      <Header title={'Programmes'} className={'app__services-title'} />
      <div className='app__services-split-container app__flex'>
        <div className='app__services-service'>
          <div className='app__services-img-121'></div>
          <div className='app__services-desc'>1-2-1 Training</div>
          <p>Dedicated, bespoke support from your Personal Trainer.</p>
        </div>
        <div className='app__services-service'>
          <div className='app__services-img-stretch'></div>
          <div className='app__services-desc'>Group Training</div>
          <p>Train in a group with friends or family for extra motivation.</p>
        </div>
        <div className='app__services-service'>
          <div className='app__services-img-121'></div>
          <div className='app__services-desc'>Online coaching</div>
          <p>Dedicated, bespoke support from your Personal Trainer.</p>
        </div>
        <div className='app__services-service'>
          <div className='app__services-img-121'></div>
          <div className='app__services-desc'>Corporate training</div>
          <p>Dedicated, bespoke support from your Personal Trainer.</p>
        </div>
        <div className='app__services-service'>
          <div className='app__services-img-121'></div>
          <div className='app__services-desc'>Retirement training</div>
          <p>Dedicated, bespoke support from your Personal Trainer.</p>
        </div>
      </div>
    </div>
  )
}

export default Services