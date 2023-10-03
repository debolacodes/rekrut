import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TopHeader() {
    const navigate = useNavigate()
    return (
        <div className='top_header'>
            <div className='logo' onClick={() => navigate('/')}></div>
            <div className='nav'>
                <div className='nav_item'
                    onClick={() => navigate('/jobs')}
                >Job Board</div>
                <div className='nav_item'
                    onClick={() => navigate('/trainings')}
                >Trainings</div>
                <div className='nav_item'
                    onClick={() => navigate('/message')}
                >Contact Us</div>
            </div>
        </div>
    );
}
