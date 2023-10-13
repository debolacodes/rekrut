import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopHeader from './components/TopHeader';
import Hero from './components/Hero';
import { mainFunctions } from "../providers/MainProvider";
import JobWidget from './components/JobsWidget';
import OurServices from './components/OurServices';
import WhyChooseUs from './components/WhyChooseUs';

export default function Landing() {
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
                title="Welcome to Genie Consulting."
                subtitle="Your trusted partner in Human Resources Solutions."
                bg="learning.svg"
                image_url="https://res.cloudinary.com/farmz2u/image/upload/v1697175300/Genie/amkhbym5cquiozsaevxp.jpg"
            />
            <div className='section light'>
                <div className='title'>About Us</div>
                <div className='quote'>
                    We are a dedicated team of professionals committed to helping businesses optimize their workforce, foster talent development, and streamline HR processes. With a wealth of experience and a passion for excellence, we provide a comprehensive suite of services that empower organizations to achieve their human resources goals.
                </div>
            </div>

            <OurServices />

            <WhyChooseUs />
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

                <JobWidget />
            </div>
        </div >
    );
}
