import React, { useState, useEffect, useContext } from 'react';
import TopHeader from './components/TopHeader';
import Hero from './components/Hero';
import { mainFunctions } from "../providers/MainProvider";
import { useNavigate } from 'react-router-dom';
import LoginWidget from './components/LoginWigdet';
import SignUpWidget from './components/SignUpWidget';
export default function ApplyWidget({ jobid }) {
    const navigate = useNavigate()
    const {
        job,
        company,
        addToDocument,
        thisuser,
    } = useContext(mainFunctions)

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        introduction: '',
        job: '',
    });
    const [hasAccount, setHasAccount] = useState(false)

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

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        let an = generateRandomString(5) + file.name
        console.log(an)
        setFormData({
            ...formData,
            cv: an
        })
        setCV({
            ...formData,
            file: file,
        });
    };

    const generateRandomString = (length) => {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let randomString = "";

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            randomString += charset[randomIndex];
        }

        return randomString;
    }

    const handleSubmit = () => {
        addToDocument('applications', formData, true, cv, formData.cv).then(
            (result) => {
                console.log('THis is the result', result)
            }
        )
        // You can submit the form data to your backend or perform any other actions here.
        console.log(formData);
    };



    const [thisJob, setThisJob] = useState([])

    useEffect(() => {
        let tj = []
        if (typeof job !== "undefined") {
            if (job.length > 0 && typeof jobid !== "undefined") {
                setFormData({ ...formData, job: jobid, uid: thisuser.uid })
                tj = job.filter((this_) => {
                    if (this_.id === jobid) {
                        return true
                    } else {
                        return false
                    }
                })
            }
        }
        setThisJob(tj)
    }, [job, jobid])

    useEffect(() => {
        console.log(job, company)
    }, [job])
    return (
        <div>
            {thisJob.length !== 0 && typeof thisuser.uid !== "undefined" &&
                <div className='section_main'>
                    <div className='section_title'>Apply</div>
                    <div className='section_subtitle'>Fill the form below to apply.</div>
                    <div className='job_list'>
                        {thisJob.map((jl) => {
                            return (
                                <div>
                                <div className='job_item' key={jl.id}>
                                    <div className='top'>
                                        <div className='inner'>
                                            <div className='title'>
                                                <div className='title_'>{jl.title}</div>
                                                <div className='subtitle'>{jl.location}</div>
                                            </div>
                                            <div className='company'>{jl.company_name}</div>
                                            <div className='company'>
                                                <div>{jl.salary}</div>
                                                {jl.type}</div>

                                        </div>
                                    </div>
                                </div>
                                <div className='more'>
                                    <div className='description'>{jl.description}</div>
                                    <div className='details'>{jl.details}</div>
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
                        <div className="formgroup">
                            <label>Brief Introduction:</label>
                            <textarea
                                name="introduction"
                                value={formData.introduction}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="formgroup">
                            <label>Upload CV:</label>
                            <input
                                type="file"
                                name="cv"
                                accept=".pdf,.doc,.docx"
                                onChange={handleFileChange}
                                required
                            />
                        </div>
                        <div onClick={()=>handleSubmit()} className="btn-primary btn">Submit</div>
                    </form>
                </div>
            }
            {thisJob.length !== 0 && typeof thisuser.uid === "undefined" &&
                <div className="admin-page d-flex-y">
                        <h2 className='title_h2'>You are required to be signed in to apply for Job.</h2>
                        {hasAccount &&
                        <LoginWidget />
                        }
                        {!hasAccount &&
                        <SignUpWidget />
                        }
                        <div
                        onClick={()=>setHasAccount(!hasAccount)}
                        className="login_footnote"
                        >
                            {hasAccount &&
                            <>    
                            Need an Account? Click here to register
                            </>
                            }
                            {!hasAccount &&
                            <>    
                                Already have an account? Click here to login
                            </>
                            }
                        </div>
                </div>
            }
            {thisJob.length === 0 &&
                <p>Select a Job on the Job Board.</p>
            }
        </div >
    );
}
