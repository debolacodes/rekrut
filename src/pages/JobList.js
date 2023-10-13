import React, { useState, useEffect, useContext } from 'react';
import TopHeader from './components/TopHeader';
import Hero from './components/Hero';
import { mainFunctions } from "../providers/MainProvider";
import { useNavigate } from 'react-router-dom';
import ApplyWidget from './ApplyWidget';
import JobWidget from './components/JobsWidget';

export default function JobList() {
    const navigate = useNavigate()
    const [selectedJob, setSelectedJob] = useState("")
    const {
        job,
        company
    } = useContext(mainFunctions)

    useEffect(() => {
        console.log(job, company)
    }, [job])

    return (
        <div>
            <TopHeader />
            <Hero
                title="Find your dream job"
                bg="job_offers.svg"
                image_url='https://res.cloudinary.com/farmz2u/image/upload/v1697175337/Genie/lu32ilzg88wqep8qdhjy.jpg'
            />
            <JobWidget />
        </div >
    );
}
