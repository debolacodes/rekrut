import React, { useState } from 'react';
import TopHeader from './components/TopHeader';

export default function JobList() {
    const [jobList, setJobList] = useState(
        [
            {
                "job_title": "Software Engineer",
                "company": "TechCorp",
                "location": "San Francisco, CA",
                "type": "Full-time",
                "experience": "3+ years"
            },
            {
                "job_title": "Data Analyst",
                "company": "Data Insights Inc.",
                "location": "New York, NY",
                "type": "Full-time",
                "experience": "2+ years"
            },
            {
                "job_title": "Digital Marketing Specialist",
                "company": "MarketingPros",
                "location": "Los Angeles, CA",
                "type": "Freelance",
                "experience": "4+ years"
            },
            {
                "job_title": "Nurse Practitioner",
                "company": "City Hospital",
                "location": "Chicago, IL",
                "type": "Full-time",
                "experience": "5+ years"
            },
            {
                "job_title": "Financial Analyst",
                "company": "Finance Solutions Ltd.",
                "location": "Houston, TX",
                "type": "Full-time",
                "experience": "3+ years"
            },
            {
                "job_title": "Mechanical Engineer",
                "company": "Mechatronix",
                "location": "Seattle, WA",
                "type": "Hybrid",
                "experience": "4+ years"
            },
            {
                "job_title": "Customer Support Specialist",
                "company": "SupportHub",
                "location": "Boston, MA",
                "type": "Full-time",
                "experience": "2+ years"
            },
            {
                "job_title": "Elementary School Teacher",
                "company": "Bright Minds Academy",
                "location": "Denver, CO",
                "type": "Full-time",
                "experience": "2+ years"
            },
            {
                "job_title": "Retail Sales Associate",
                "company": "FashionEmporium",
                "location": "Miami, FL",
                "type": "Part-time",
                "experience": "1+ year"
            },
            {
                "job_title": "Hotel Front Desk Clerk",
                "company": "Sunset Resorts",
                "location": "Orlando, FL",
                "type": "Full-time",
                "experience": "1+ year"
            },
            {
                "job_title": "HR Manager",
                "company": "HRPro Inc.",
                "location": "Dallas, TX",
                "type": "Full-time",
                "experience": "5+ years"
            },
            {
                "job_title": "Graphic Designer",
                "company": "CreatiDesign",
                "location": "San Diego, CA",
                "type": "Freelance",
                "experience": "3+ years"
            },
            {
                "job_title": "Manufacturing Technician",
                "company": "TechMakers",
                "location": "Detroit, MI",
                "type": "Full-time",
                "experience": "2+ years"
            },
            {
                "job_title": "Biomedical Scientist",
                "company": "BioTech Labs",
                "location": "Philadelphia, PA",
                "type": "Full-time",
                "experience": "4+ years"
            },
            {
                "job_title": "Agricultural Specialist",
                "company": "FarmLife Co.",
                "location": "Kansas City, MO",
                "type": "Full-time",
                "experience": "3+ years"
            },
            {
                "job_title": "Construction Project Manager",
                "company": "BuildIt Inc.",
                "location": "Atlanta, GA",
                "type": "Full-time",
                "experience": "5+ years"
            },
            {
                "job_title": "Legal Counsel",
                "company": "LawFirm LLP",
                "location": "Washington, D.C.",
                "type": "Full-time",
                "experience": "4+ years"
            },
            {
                "job_title": "Media Producer",
                "company": "MediaWorks",
                "location": "San Jose, CA",
                "type": "Full-time",
                "experience": "3+ years"
            },
            {
                "job_title": "Delivery Driver",
                "company": "Speedy Logistics",
                "location": "Phoenix, AZ",
                "type": "Part-time",
                "experience": "1+ year"
            },
            {
                "job_title": "Real Estate Agent",
                "company": "Dream Homes Realty",
                "location": "Nashville, TN",
                "type": "Full-time",
                "experience": "2+ years"
            },
            {
                "job_title": "Telecommunications Engineer",
                "company": "TeleComTech",
                "location": "Raleigh, NC",
                "type": "Full-time",
                "experience": "3+ years"
            },
            {
                "job_title": "Pharmaceutical Researcher",
                "company": "PharmaGen Inc.",
                "location": "Minneapolis, MN",
                "type": "Full-time",
                "experience": "4+ years"
            },
            {
                "job_title": "Nonprofit Program Manager",
                "company": "Hope Foundation",
                "location": "Portland, OR",
                "type": "Full-time",
                "experience": "3+ years"
            },
            {
                "job_title": "Government Policy Analyst",
                "company": "GovSolutions",
                "location": "Salt Lake City, UT",
                "type": "Full-time",
                "experience": "4+ years"
            },
            {
                "job_title": "Insurance Agent",
                "company": "SecureInsure",
                "location": "Indianapolis, IN",
                "type": "Full-time",
                "experience": "2+ years"
            },
            {
                "job_title": "Energy Engineer",
                "company": "EcoPower Inc.",
                "location": "Austin, TX",
                "type": "Full-time",
                "experience": "3+ years"
            },
            {
                "job_title": "Environmental Scientist",
                "company": "EcoSolutions",
                "location": "Denver, CO",
                "type": "Full-time",
                "experience": "2+ years"
            },
            {
                "job_title": "Sports Coach",
                "company": "SportsElite",
                "location": "San Diego, CA",
                "type": "Freelance",
                "experience": "5+ years"
            },
            {
                "job_title": "Fashion Designer",
                "company": "TrendyThreads",
                "location": "Los Angeles, CA",
                "type": "Full-time",
                "experience": "3+ years"
            },
            {
                "job_title": "Art Curator",
                "company": "Gallery Artistry",
                "location": "New York, NY",
                "type": "Full-time",
                "experience": "4+ years"
            }
        ]
    )
    return (
        <div>
            <TopHeader />
            <div className='hero'>
                <div className='left_container'>
                    <h1>Find your dream job</h1>
                </div>
                <div className='right_container hero_bg'></div>
            </div>
            <div className='section_main'>
                <div className='section_title'>Technology Jobs</div>
                <div className='section_subtitle'>We will find the right job that suits you.</div>
                <div className='job_list'>
                    {jobList.map((jl, index) => {
                        return (
                            <div className='job_item'>

                                {/* job_title": "Art Curator",
                                "company": "Gallery Artistry",
                                "location": "New York, NY",
                                "type": "Full-time",
                                "experience": "4+ years" */}
                                <div className='top'>
                                    <div className='icon'></div>
                                    <div className='inner'>
                                        <div className='title'>
                                            <div className='title_'>{jl.job_title}</div>
                                            <div className='subtitle'>{jl.location}</div>
                                        </div>
                                        <div className='comapny'>{jl.company}</div>
                                        <div className='type'>{jl.type}</div>

                                    </div>
                                </div>
                                <div className='bottom'>
                                    <div className='experience'>{jl.experience}</div>
                                    <div className='btn'>Apply Now</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div >
    );
}
