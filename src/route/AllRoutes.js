import React, { useContext, useState, useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { mainFunctions } from "../providers/MainProvider";
import Landing from '../pages/Landing'
import '../assets/global.css'
import JobList from '../pages/JobList'
import Trainings from '../pages/Trainings'
import Apply from '../pages/Apply'
import ContactUs from '../pages/ContactUs'
import RegisterNow from '../pages/RegisterNow'
import AdminLogin from '../pages/admin/AdminLogin'
import AdminDashboard from '../pages/admin/AdminDashboard'
import AdminJobs from '../pages/admin/AdminJobs'
import AdminTrainings from '../pages/admin/AdminTrainings'
import AdminMessages from '../pages/admin/AdminMessages'
import Services from '../pages/Services'
import AdminApplications from '../pages/admin/AdminApplications'
import AdminRegisterations from '../pages/admin/AdminRegisterations'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import UserRegisterations from '../pages/user/UserRegisterations'
import UserApplications from '../pages/user/UserApplications'
import UserDashboard from '../pages/user/UserDashboard'


export default function AllRoutes() {
  const {
    thisuser,
  } = useContext(mainFunctions)
  return (
    <div className='body'>

      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/jobs" element={<JobList />} />
        <Route exact path="/jobs/:joblist" element={<JobList />} />
        <Route exact path="/trainings" element={<Trainings />} />
        <Route exact path="/message" element={<ContactUs />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/login" element={typeof thisuser.uid === "undefined" ? < Login /> : <UserApplications/>} />
        <Route exact path="/signup" element={typeof thisuser.uid === "undefined" ? < SignUp /> : <UserApplications/>} />

        <Route exact path="/user/" element={typeof thisuser.uid === "undefined" ? < Login /> : < UserApplications />} />
        <Route exact path="/user/applications" element={typeof thisuser.uid === "undefined" ? < Login /> : < UserApplications />} />
        <Route exact path="/user/registerations" element={typeof thisuser.uid === "undefined" ? < Login /> : < UserRegisterations />} />


        {/* <Route exact path="/admin" element={< AdminLogin />} />
        <Route exact path="/admin/login" element={< AdminLogin />} />
        <Route exact path="/admin/dashboard" element={<AdminDashboard />} />
        <Route exact path="/admin/jobs" element={<AdminJobs />} />
        <Route exact path="/admin/trainings" element={<AdminTrainings />} />
        <Route exact path="/admin/applications" element={<AdminApplications />} />
        <Route exact path="/admin/registerations" element={<AdminRegisterations />} />
        <Route exact path="/admin/messages" element={<AdminMessages />} /> */}

      </Routes>
    </div>
  )
}
