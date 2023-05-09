import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Navbar } from './Components/index.js';
import { Header, About, Services, Contact, Workout, Blog } from './Container';

import './App.scss';
import BlogPage from './Pages/BlogPage.jsx';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route exact path='/' element={
          <>
            <Navbar />
            <Header />
            <About />
            <Services />
            <Contact />
            <Workout />
            <Blog />
          </>} />
        <Route exact path={'/posts/:slug'} element={
          <BlogPage />
        } />
      </Routes>
    </div >
  )
}

export default App;
