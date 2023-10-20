// Login.js

import React, { useState, useContext } from 'react';
import LoginWidget from './components/LoginWigdet';
import { useNavigate } from 'react-router-dom';
import TopHeader from './components/TopHeader';
export default function SignUp() {
    const navigate = useNavigate()
    return (
        <>
        <TopHeader />
        <div className="admin-page">
            <LoginWidget />
            <div 
            className='login_shortnote'
            onClick={()=>{
                navigate('/signup')
            }}
            ><p>Don't have an account, Register</p></div>
        </div>
        </>
    );
}


