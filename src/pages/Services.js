import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopHeader from './components/TopHeader';
import Hero from './components/Hero';
import { mainFunctions } from "../providers/MainProvider";
import JobWidget from './components/JobsWidget';

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
            />

            <div className='section dark'>
                <div className='title'>Our Services</div>
                <div className='section_text'>
                    We are a dedicated team of professionals committed to helping businesses optimize their workforce, foster talent development, and streamline HR processes. With a wealth of experience and a passion for excellence, we provide a comprehensive suite of services that empower organizations to achieve their human resources goals.
                </div>
                <div className='row services_list'>
                    <div className='col col-sm-6'>
                        <div className='list_title'>Corporate Training</div>
                        <div className='text'>
                            We understand that the success of any organization depends on the knowledge and skills of its workforce. Our corporate training programs are designed to enhance the capabilities of your employees, ensuring they stay updated with the latest industry trends and best practices.
                        </div>
                    </div>
                    <div className='col col-sm-6'>
                        <div className='list_title'>Workforce Outsourcing/Recruitment</div>
                        <div className='text'>
                            Finding the right talent can be a challenging and time-consuming task. Our workforce outsourcing and recruitment services are aimed at identifying, attracting, and onboarding top-tier talent that aligns with your company's culture and objectives.
                        </div>
                    </div>
                    <div className='col col-sm-6'>
                        <div className='list_title'>HR Outsourcing</div>
                        <div className='text'>
                            Managing HR functions can be overwhelming for businesses of all sizes. Let us take the burden off your shoulders. Our HR outsourcing services cover everything from payroll administration to compliance, allowing you to focus on your core business activities.
                        </div>
                    </div>
                    <div className='col col-sm-6'>
                        <div className='list_title'>HR Consulting</div>
                        <div className='text'>
                            Whether you need guidance on HR strategy, policy development, or organizational restructuring, our experienced HR consultants are here to provide expert advice and solutions that drive your business forward.
                        </div>
                    </div>

                </div>
            </div>
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
