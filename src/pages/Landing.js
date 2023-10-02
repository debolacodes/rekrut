import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopHeader from './components/TopHeader';
import Hero from './components/Hero';
import { mainFunctions } from "../providers/MainProvider";

export default function Landing() {
    const navigate = useNavigate()

    const {
        category,
    } = useContext(mainFunctions)
    const [jobList, setJobList] = useState(
        [
            { "category": "Software Development", "number_of_available_jobs": 50 },
            { "category": "Data Science", "number_of_available_jobs": 250 },
            { "category": "Sales and Marketing", "number_of_available_jobs": 3000 },
            { "category": "Healthcare", "number_of_available_jobs": 4000 },
            { "category": "Finance", "number_of_available_jobs": 3500 },
            { "category": "Engineering", "number_of_available_jobs": 4500 },
            { "category": "Customer Service", "number_of_available_jobs": 2000 },
            { "category": "Education", "number_of_available_jobs": 2800 },
            { "category": "Retail", "number_of_available_jobs": 2200 },
            { "category": "Hospitality", "number_of_available_jobs": 1800 },
            { "category": "Human Resources", "number_of_available_jobs": 1500 },
            { "category": "Design", "number_of_available_jobs": 2100 },
            { "category": "Manufacturing", "number_of_available_jobs": 3200 },
            { "category": "Biotechnology", "number_of_available_jobs": 2700 },
            { "category": "Agriculture", "number_of_available_jobs": 1900 },
            { "category": "Construction", "number_of_available_jobs": 2600 },
            { "category": "Legal", "number_of_available_jobs": 1400 },
            { "category": "Media and Entertainment", "number_of_available_jobs": 2300 },
            { "category": "Transportation", "number_of_available_jobs": 1700 },
            { "category": "Real Estate", "number_of_available_jobs": 1600 },
            { "category": "Telecommunications", "number_of_available_jobs": 1300 },
            { "category": "Pharmaceuticals", "number_of_available_jobs": 2400 },
            { "category": "Nonprofit", "number_of_available_jobs": 1200 },
            { "category": "Government", "number_of_available_jobs": 1100 },
            { "category": "Insurance", "number_of_available_jobs": 900 },
            { "category": "Energy", "number_of_available_jobs": 800 },
            { "category": "Environmental", "number_of_available_jobs": 700 },
            { "category": "Sports and Recreation", "number_of_available_jobs": 600 },
            { "category": "Fashion", "number_of_available_jobs": 500 },
            { "category": "Arts and Culture", "number_of_available_jobs": 400 }
        ])



    useEffect(() => {
        console.log(category)
    }, [category])
    return (
        <div>
            <TopHeader />
            <Hero
                title="Find your dream job"
                bg="learning.svg"
            />
            <div className='section_main'>
                <div className='section_title'>Browse Jobs Categories</div>
                <div className='section_subtitle'>We will find the right job that suits you.</div>
                <div className='category_list'>
                    {category.map((jb, index) => {
                        return (
                            <div className='category_item' key={index}
                                onClick={() => {
                                    navigate(`/jobs/${jb.id}`)
                                }}
                            >
                                <div className='icon'></div>
                                <div className='title'>{jb.name}</div>
                                {/* <div className='subtitle'>{jb.number_of_available_jobs} Jobs</div> */}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div >
    );
}
