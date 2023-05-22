import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Navbar } from './Components/index.js';
import { Header, About, Services, Contact, Workout, Blog, Reviews, Footer } from './Container';
import { BlogPage, FAQ, FitnessTest, Videos } from './Pages'
import './App.scss';

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
            <Footer />
          </>} />
        <Route exact path={'/posts/:slug'} element={
          <BlogPage />
        } />
        <Route exact path={'/FAQ'} element={
          <FAQ />
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
