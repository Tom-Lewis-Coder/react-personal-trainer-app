import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Navbar } from './Components/index.js';
import { Header, About, Services, Contact, Workout, Blog, Reviews } from './Container';

import './App.scss';
import BlogPage from './Pages/BlogPage.jsx';
import BMI from './Pages/BMI.jsx';
import FitnessTest from './Pages/FitnessTest.jsx';
import Videos from './Pages/Videos.jsx';

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
            <Blog />
            <Workout />
            <Contact />
            <Reviews />
          </>} />
        <Route exact path={'/posts/:slug'} element={
          <BlogPage />
        } />
        <Route exact path={'/BMI'} element={
          <BMI />
        } />
        <Route exact path={'/test'} element={
          <FitnessTest />
        } />
        <Route exact path={'/videos'} element={
          <Videos />
        } />
      </Routes>
    </div >
  )
}

export default App;
