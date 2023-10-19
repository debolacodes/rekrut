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
            <div className='nav-item'  onClick={()=>navigate('/user/applications')}>Job History</div>
            <div className='nav-item'  onClick={()=>navigate('/user/registerations')}>Trainings</div>
            <div className='nav-item' onClick={()=>navigate('/')}>Back to Home</div>
            <div className='nav-item' onClick={()=>handleLogout()}>Logout</div>
        </div>
    </div>
  )
}
