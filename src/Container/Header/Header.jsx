import React, { useState, useEffect, useRef } from 'react'
import { headerImages } from '../../Constants'
import { Link } from 'react-router-dom'
import { Calendly } from '../../Components'

import './Header.scss'

const Header = () => {
  const [headerImg, setHeaderImg] = useState(headerImages[0])
  const [lightImg, setLightImg] = useState(0)

  const windowSize = useRef([window.innerWidth])

  useEffect(() => {
    let count = 0
    const timer = setInterval(() => {
      count === headerImages.length - 1 ? (count = 0) : count++
      setHeaderImg(headerImages[count])
      setLightImg(count)
    }, 6000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className="app__header app__flex" id="home">
      <div className="app__header-top app__flex">
        <img src={headerImg} alt="fitness pictures" className="app__header-img" />
        <div className="app__header-pic-text">
          <div
            className="app__header-pic-text-upper app__flex"
            style={
              lightImg < 3
                ? {
                    color: '#424946',
                    background: 'rgba(255, 255, 255, 0.5)'
                  }
                : { color: 'white' }
            }
          >
            <p>
              Transform Your Life with TSL,
              <br />
              Bringing the Gym to You!
            </p>
          </div>
          <a
            href="#contact"
            className="app__header-pic-text-lower app__flex"
            style={
              lightImg < 3
                ? {
                    color: '#303533',
                    background: 'rgba(255, 255, 255, 0.5)'
                  }
                : { color: 'white' }
            }
          >
            Enquire now ...
          </a>
        </div>
      </div>
      <div className="app__header-lower">
        <Link to={'./FAQ'} className="app__header-lower-left app__flex">
          <p>FAQ</p>
        </Link>
        <Link to={'/test'} className={'app__header-lower-middle app__flex'}>
          <p>Fitness Test</p>
        </Link>
        <Link to={'./videos'} className="app__header-lower-right app__flex">
          <p>Videos</p>
        </Link>
      </div>
      <Calendly
        text={
          windowSize.current[0] > 768 ? 'Click to book a free consultation' : 'Free consultation'
        }
      />
    </div>
  )
}

export default Header
