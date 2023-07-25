import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'

import './Navbar.scss'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="app__navbar">
      <ul className="app__navbar-links">
        {[
          'home',
          'about',
          'services',
          'blog/nutrition',
          'track & train',
          'contact',
          'reviews'
        ].map((item) => (
          <li className="app-flex p-text" key={item}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 data-testid="menuDrop" onClick={() => setToggle(true)} />

        {toggle && (
          <div data-testid="menu">
            <HiX data-testid="menuUp" onClick={() => setToggle(false)} />
            <ul className="app__navbar-links">
              {[
                'home',
                'about',
                'services',
                'blog/nutrition',
                'track & train',
                'contact',
                'reviews'
              ].map((item) => (
                <li className="app-flex p-text" key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="app__navbar-logo">TSL FITNESS</div>
    </nav>
  )
}

export default Navbar
