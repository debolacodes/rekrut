import React, { useContext, useState, useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Landing from '../pages/Landing'
import '../assets/global.css'
import JobList from '../pages/JobList'
import Trainings from '../pages/Trainings'


export default function AllRoutes() {

  return (
    <div className='body'>

      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/jobs" element={<JobList />} />
        <Route exact path="/trainings" element={<Trainings />} />
        <Route exact path="/jobs/:joblist" element={<JobList />} />
      </Routes>
    </div>
  )
}
