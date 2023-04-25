import React from 'react'

import { Navbar } from './Components/index.js';
import { Header, About, Services, Contact, Workout } from './Container';

import './App.scss';

function App() {
  return (
    <>
      <div className='app'>
        <Navbar />
        <Header />
        <About />
        <Services />
        <Contact />
        <Workout />
      </div>
    </>
  )
}

export default App;
