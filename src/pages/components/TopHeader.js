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
    const location = useLocation()

    useEffect(()=>{
        setShowNav(false)
    },[location])
    return (
        <div className='top_header'>
            <div className='logo' onClick={() => navigate('/')}></div>
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
                    <div className='nav_item'
                        onClick={() => navigate('/login')}
                    >Login</div>
                }
                {typeof thisuser.uid !== "undefined" &&
                    <div className='nav_item'
                        onClick={() => navigate('/user/')}
                    >Dashboard</div>
                }
                {typeof thisuser.uid !== "undefined" &&
                    <div className='nav_item'
                        onClick={() => handleLogout()}
                    >Logout</div>
                }
            </div>
            <div className='anchor' onClick={()=>setShowNav(!showNav)}></div>
        </div>
    );
}
