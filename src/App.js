import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { AppMain, BlogPage, FAQ, FitnessTest, Videos, VideoPlayer } from './Pages'

import './App.scss';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route exact path='/' element={
          <AppMain />
        } />
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
        <Route exact path={'/videos/videoplayer'} element={
          <VideoPlayer />
        } />
      </Routes>
    </div >
  )
}

export default App;
