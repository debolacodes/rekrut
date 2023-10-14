import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function SideNav() {
  const navigate = useNavigate()
  return (
    <div className="sidenav">
        <div className='nav'>
            <div className='nav-item' onClick={()=>navigate('/admin/dashboard')}>Dashboard</div>
            <div className='nav-item'  onClick={()=>navigate('/admin/jobs')}>Jobs</div>
            <div className='nav-item'  onClick={()=>navigate('/admin/training')}>Trainings</div>
            <div className='nav-item'  onClick={()=>navigate('/admin/applications')}>Applications</div>
            <div className='nav-item'  onClick={()=>navigate('/admin/registerations')}>Registerations</div>
            <div className='nav-item'  onClick={()=>navigate('/admin/messages')}>Messages</div>
        </div>
    </div>
  )
}
