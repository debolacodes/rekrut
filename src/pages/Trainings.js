import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopHeader from './components/TopHeader';

export default function Trainings() {
    const navigate = useNavigate()
    const [trainingList, setTrainingList] = useState(
        [
            {
                "title": "HR Fundamentals",
                "description": "Learn the basics of human resources management, including recruitment, employee relations, and HR compliance.",
                "duration": "4 weeks",
                "price": "$299"
            },
            {
                "title": "Recruitment and Staffing Strategies",
                "description": "Explore effective recruitment techniques and staffing strategies to find and retain top talent.",
                "duration": "6 weeks",
                "price": "$399"
            },
            {
                "title": "Employee Relations and Conflict Resolution",
                "description": "Develop skills in managing employee relations and resolving workplace conflicts professionally.",
                "duration": "5 weeks",
                "price": "$349"
            },
            {
                "title": "HR Compliance and Legal Issues",
                "description": "Understand HR compliance requirements and legal issues related to employment and labor laws.",
                "duration": "8 weeks",
                "price": "$499"
            },
            {
                "title": "Compensation and Benefits Management",
                "description": "Learn how to design and administer competitive compensation and benefits packages.",
                "duration": "6 weeks",
                "price": "$449"
            },
            {
                "title": "Training and Development Strategies",
                "description": "Discover effective training and development strategies to enhance employee skills and productivity.",
                "duration": "7 weeks",
                "price": "$479"
            },
            {
                "title": "Diversity and Inclusion in the Workplace",
                "description": "Promote diversity and inclusion to create a more equitable and productive work environment.",
                "duration": "4 weeks",
                "price": "$299"
            },
            {
                "title": "Performance Appraisal and Management",
                "description": "Master the art of performance appraisal and management for employee growth and development.",
                "duration": "5 weeks",
                "price": "$349"
            },
            {
                "title": "Strategic HR Leadership",
                "description": "Gain leadership skills and insights to make strategic HR decisions that drive organizational success.",
                "duration": "8 weeks",
                "price": "$499"
            },
            {
                "title": "Talent Acquisition and Retention",
                "description": "Explore advanced talent acquisition strategies and employee retention techniques.",
                "duration": "6 weeks",
                "price": "$449"
            },
            {
                "title": "HR Analytics and Data-Driven Decision Making",
                "description": "Harness the power of HR analytics to make data-driven decisions and optimize HR processes.",
                "duration": "7 weeks",
                "price": "$479"
            },
            {
                "title": "Labor Relations and Collective Bargaining",
                "description": "Learn about labor relations, collective bargaining, and union-management relations.",
                "duration": "5 weeks",
                "price": "$349"
            },
            {
                "title": "HR Technology and Automation",
                "description": "Explore HR technology trends and tools to streamline HR processes and improve efficiency.",
                "duration": "6 weeks",
                "price": "$449"
            },
            {
                "title": "Ethical HR Practices",
                "description": "Understand the importance of ethical HR practices and their impact on organizational culture.",
                "duration": "4 weeks",
                "price": "$299"
            },
            {
                "title": "Workplace Safety and Health",
                "description": "Ensure a safe and healthy workplace by learning about workplace safety regulations and practices.",
                "duration": "5 weeks",
                "price": "$349"
            },
            {
                "title": "HR Strategy and Organizational Development",
                "description": "Develop HR strategies that align with organizational goals and drive growth and development.",
                "duration": "8 weeks",
                "price": "$499"
            },
            {
                "title": "HR Leadership and Change Management",
                "description": "Lead HR teams and manage organizational change effectively with this comprehensive course.",
                "duration": "7 weeks",
                "price": "$479"
            },
            {
                "title": "Employee Engagement Strategies",
                "description": "Boost employee engagement and motivation through effective HR strategies and practices.",
                "duration": "6 weeks",
                "price": "$449"
            },
            {
                "title": "HR Audit and Compliance Review",
                "description": "Conduct HR audits and compliance reviews to ensure adherence to HR regulations and policies.",
                "duration": "5 weeks",
                "price": "$349"
            },
            {
                "title": "HR Certification Exam Prep",
                "description": "Prepare for HR certification exams such as SHRM-CP or PHR with this comprehensive exam prep course.",
                "duration": "10 weeks",
                "price": "$599"
            }
        ]
    )
    return (
        <div>
            <TopHeader />
            <div className='hero'>
                <div className='left_container'>
                    <h1>Find your dream trainings</h1>
                </div>
                <div className='right_container hero_bg'></div>
            </div>
            <div className='section_main'>
                <div className='section_title'>Trainings</div>
                <div className='section_subtitle'>We will find the right job that suits you.</div>
                <div className='trainings_list'>
                    {trainingList.map((jb, index) => {
                        return (
                            <div className='trainings_item' key={index}>
                                <div className='image'></div>
                                <div className='inner'>
                                    <div className='title'>{jb.title}</div>
                                    <div className='description'>{jb.description}</div>
                                    <div className='details'>
                                        <div className='duration'>{jb.duration}</div>
                                        <div className='price'>{jb.price}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div >
    );
}
