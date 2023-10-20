import React, {useState, useEffect, useContext} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { mainFunctions } from "../../providers/MainProvider";

export default function TopHeader() {
    const {
        thisuser,
        handleLogout
    } = useContext(mainFunctions)

    const navigate = useNavigate()
    const [showNav, setShowNav] = useState(false);
    const [showProfileNav, setShowProfileNav] = useState(false)
    const location = useLocation()

    useEffect(()=>{
        setShowNav(false)
        setShowProfileNav(false)
    },[location, thisuser])

    return (
        <div className='top_header'>
            <div className='logo' onClick={() => navigate('/')}></div>
            <div className='navigation'>
            <div className={`nav ${showNav ? 'showOnSmall': ''}`}
            >
                
                <div className='nav_item'
                    onClick={() => navigate('/jobs')}
                >Job Board</div>
                <div className='nav_item'
                    onClick={() => navigate('/trainings')}
                >Trainings</div>
                <div className='nav_item'
                    onClick={() => navigate('/services')}
                >Our Services</div>
                <div className='nav_item'
                    onClick={() => navigate('/message')}
                >Contact Us</div>
                {typeof thisuser.uid === "undefined" &&
                    <div className='nav_item hideOnMobile'
                        onClick={() =>  setShowProfileNav(!showProfileNav)}
                    >Login / Sign up</div>
                }
                {showProfileNav && typeof thisuser.uid === "undefined" &&
                <div className='nav2 smaller'>
                    <div className="nav-item" onClick={() => navigate('/login')}>Login</div>
                    <div className="nav-item" onClick={() => navigate('/signup')}>Sign up</div>
                </div> 
                }
                {showProfileNav && typeof thisuser.uid !== "undefined" &&
                <div className='nav2'>
                    <div className="nav-item" onClick={()=>navigate('/user/applications')}>My Jobs</div>
                    <div className="nav-item" onClick={()=>navigate('/user/registerations')}>My Trainings</div>
                    <div className="nav-item" onClick={()=>handleLogout()}>Logout</div>
                </div> 
                }
                
            </div>
            {typeof thisuser.uid !== "undefined" &&
                <div className='profile-name' onClick={()=>{
                    setShowProfileNav(!showProfileNav)
                }}>{thisuser.email.toString().slice(0,2)}</div>
            }
            </div>
            
            <div className='anchor' onClick={()=>{
                setShowNav(!showNav)
                setShowProfileNav(true)
            }}></div>
        </div>
    );
}
