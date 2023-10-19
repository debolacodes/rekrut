import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopHeader from './components/TopHeader';
import Hero from './components/Hero';
import { mainFunctions } from "../providers/MainProvider";
import JobWidget from './components/JobsWidget';
import OurServices from './components/OurServices';

export default function Services() {
    const navigate = useNavigate()

    const {
        category,
    } = useContext(mainFunctions)




    useEffect(() => {
        console.log(category)
    }, [category])
    return (
        <div>
            <TopHeader />
            <Hero
                title="Our Services"
                subtitle="Your trusted partner in Human Resources Solutions."
                bg="learning.svg"
                image_url="https://res.cloudinary.com/farmz2u/image/upload/v1697173667/Genie/ftfhbmdhcj5zl2kzdrbh.jpg"
                showButton={true}
            />

            <OurServices />
            <div className='section_main'>
                <div className='section_title'>Browse Jobs Categories</div>
                <div className='section_subtitle'>
                    Jobs are hard to find, but JobGenie is here to make it easy.
                    <br />Your next career move is just a click away.
                </div>
                <div className='cta'
                    onClick={() => {
                        navigate('/jobs')
                    }}
                >
                    Find Jobs Now
                </div>
            </div>
        </div >
    );
}
