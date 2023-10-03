import React, { useContext, useState, useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Landing from '../pages/Landing'
import '../assets/global.css'
import JobList from '../pages/JobList'
import Trainings from '../pages/Trainings'
import Apply from '../pages/Apply'
import ContactUs from '../pages/ContactUs'


export default function AllRoutes() {

  return (
    <div className='body'>

      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/jobs" element={<JobList />} />
        <Route exact path="/trainings" element={<Trainings />} />
        <Route exact path="/message" element={<ContactUs />} />
        <Route exact path="/jobs/:joblist" element={<JobList />} />
        <Route exact path="/apply/:jobid" element={<Apply />} />

      </Routes>
    </div>
  )
}
