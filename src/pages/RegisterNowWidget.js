import React, { useState, useEffect, useContext } from 'react';
import TopHeader from './components/TopHeader';
import Hero from './components/Hero';
import { mainFunctions } from "../providers/MainProvider";
import { useNavigate } from 'react-router-dom';
export default function RegisterNowWidget({ id }) {
    const navigate = useNavigate()
    const {
        job,
        training,
        company,
        addToDocument
    } = useContext(mainFunctions)

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });

    const [cv, setCV] = useState({
        file: null
    })


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        addToDocument('registerations', formData, false).then(
            (result) => {
                console.log('THis is the result', result)
            }
        )
        // You can submit the form data to your backend or perform any other actions here.
        console.log(formData);
    };



    const [thisTraining, setThisTraining] = useState([])

    useEffect(() => {
        let tj = []
        if (typeof training !== "undefined") {
            if (training.length > 0 && typeof id !== "undefined") {
                setFormData({ ...formData, training: id })
                tj = training.filter((this_) => {
                    if (this_.id === id) {
                        return true
                    } else {
                        return false
                    }
                })
            }
        }
        setThisTraining(tj)
    }, [job, id])

    useEffect(() => {
        console.log(job, company)
    }, [job])


    return (
        <div>
            <div className='section_main'>
                {thisTraining.length !== 0 &&
                    <div>
                        <div className='section_title'>Apply</div>
                        <div className='section_subtitle'>Fill the form below to register for training.</div>
                        <div className='job_list'>
                            {thisTraining.map((jl) => {
                                return (
                                    <div className='job_item' key={jl.id}>
                                        <div className='top'>
                                            <div className='inner'>
                                                <div className='title'>
                                                    <div className='title_'>{jl.title}</div>
                                                    <div className='subtitle'>{jl.description}</div>
                                                </div>
                                                <div className='company'>{jl.duration}</div>

                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <form onSubmit={handleSubmit} className="form1">
                            <div className="formgroup">
                                <label>First Name:</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="formgroup">
                                <label>Last Name:</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="formgroup">
                                <label>Email Address:</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="formgroup">
                                <label>Phone Number:</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className='cta' type="submit">Submit</div>
                        </form>
                    </div>
                }
                {thisTraining.length === 0 &&
                    <p>Select a Job on the Job Board.</p>
                }
            </div>
        </div >
    );
}
