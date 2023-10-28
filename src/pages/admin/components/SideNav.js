import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { mainFunctions } from "../../../providers/MainProvider";

export default function SideNav() {
  const navigate = useNavigate()
  const {
    thisuser,
    handleLogout
} = useContext(mainFunctions)
  return (
    <div className="sidenav">
        <div className='nav'>
            <div className='nav-item' onClick={()=>navigate('/admin/dashboard')}>Dashboard</div>
            <div className='nav-item'  onClick={()=>navigate('/admin/jobs')}>Jobs</div>
            <div className='nav-item'  onClick={()=>navigate('/admin/trainings')}>Trainings</div>
            <div className='nav-item'  onClick={()=>navigate('/admin/applications')}>Applications</div>
            <div className='nav-item'  onClick={()=>navigate('/admin/registerations')}>Registerations</div>
            <div className='nav-item'  onClick={()=>navigate('/admin/messages')}>Messages</div>
            <div className='nav-item' onClick={()=>handleLogout()}>Logout</div>
        </div>
    </div>
  )
}
