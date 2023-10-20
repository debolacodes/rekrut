// Login.js

import React, { useState, useContext } from 'react';
import SignUpWidget from './components/SignUpWidget'
import { useNavigate } from 'react-router-dom';
import TopHeader from './components/TopHeader';

export default function SignUp() {
    const navigate = useNavigate()
    return (
        <>
        <TopHeader />
        <div className="admin-page">
            
            <SignUpWidget />
            <div 
            className='login_shortnote'
            onClick={()=>{
                navigate('/login')
            }}
            ><p>Already have an account, Click here to login</p></div>
        </div>
        </>
    );
}


