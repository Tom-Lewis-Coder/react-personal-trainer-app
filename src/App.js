import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import {
  AppMain,
  BlogPage,
  FAQ,
  FitnessTest,
  Videos,
  VideoPlayer,
  FatLoss,
  HealthAndWellbeing,
  MuscleBuilding,
  One2One,
  Group,
  Online,
  Corporate
} from './Pages'

import './App.scss'

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<AppMain />} />
          <Route exact path={'/posts/:slug'} element={<BlogPage />} />
          <Route exact path={'/FAQ'} element={<FAQ />} />
          <Route exact path={'/test'} element={<FitnessTest />} />
          <Route exact path={'/videos'} element={<Videos />} />
          <Route exact path={'/videos/videoplayer'} element={<VideoPlayer />} />
          <Route exact path={'/fatloss'} element={<FatLoss />} />
          <Route
            exact
            path={'/healthandwellbeing'}
            element={<HealthAndWellbeing />}
          />
          <Route exact path={'/musclebuilding'} element={<MuscleBuilding />} />
          <Route exact path={'/one2one'} element={<One2One />} />
          <Route exact path={'/group'} element={<Group />} />
          <Route exact path={'/online'} element={<Online />} />
          <Route exact path={'/corporate'} element={<Corporate />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
