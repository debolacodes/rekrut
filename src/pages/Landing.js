import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopHeader from './components/TopHeader';
import Hero from './components/Hero';
import { mainFunctions } from "../providers/MainProvider";
import JobWidget from './components/JobsWidget';

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
            />
            <div className='section light'>
                <div className='quote'>
                    We are a dedicated team of professionals committed to helping businesses optimize their workforce, foster talent development, and streamline HR processes. With a wealth of experience and a passion for excellence, we provide a comprehensive suite of services that empower organizations to achieve their human resources goals.
                </div>
            </div>

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

            <div className='section'>
                <div className='title'>Why Choose Us</div>
                <div className='section_text'>
                    At  Genie Consulting, we pride ourselves on being more than just consultants. We are your strategic partners in HR, working collaboratively with you to achieve your HR goals and enhance your company's performance. Here are some reasons why you should choose us.
                </div>
                <div className='why_choose_us row'>
                    <div className='col col-sm-12'>
                        <div className='list_title'>Expertise</div>
                        <div className='list_text'>
                            Our team consists of seasoned HR professionals with extensive industry knowledge. We stay updated with the latest trends and regulations to provide you with the most relevant and effective solutions.
                        </div>
                    </div>
                    <div className='col col-sm-12'>
                        <div className='list_title'>Results-Oriented</div>
                        <div className='list_text'>
                            We measure our success by the impact we make on your business. Our solutions are designed to deliver measurable results that drive growth and efficiency.
                        </div>
                    </div>
                    <div className='col col-sm-12'>
                        <div className='list_title'>Confidentiality</div>
                        <div className='list_text'>
                            We treat all client information with the utmost confidentiality and adhere to the highest ethical standards in our industry.
                        </div>
                    </div>
                </div>
                <div className='cta'>Contact Us Today</div>
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

                <JobWidget />
            </div>
        </div >
    );
}
