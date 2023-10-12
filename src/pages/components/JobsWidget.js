import React, { useState, useEffect, useContext } from 'react';
import { mainFunctions } from "../../providers/MainProvider";
import { useNavigate } from 'react-router-dom';
import ApplyWidget from '../ApplyWidget';

export default function JobWidget() {
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
        <div className='section_main'>
            <div className='row'>
                {selectedJob === "" &&
                    <div className='col-sm-12'>
                        <div className='job_list'>
                            {job.map((jl) => {
                                return (
                                    <div className={`job_item ${selectedJob === jl.id ? 'active' : ""}`} key={jl.id}
                                        onClick={() => {
                                            setSelectedJob(jl.id)
                                        }}>
                                        <div className='top'>
                                            {/* <div className='icon'></div> */}
                                            <div className='inner'>
                                                <div className='title'>
                                                    <div className='title_'>{jl.title}</div>
                                                    <div className='subtitle'>{jl.location}</div>
                                                </div>
                                                <div className='comapny'>{typeof company[jl.company] !== 'undefined' ? company[jl.company].name : 'Unlnown Company'}</div>
                                                <div className='type'>{jl.type}</div>

                                            </div>
                                        </div>
                                        <div className='bottom'>
                                            <div className='experience'>{jl.experience} Years</div>
                                            {/* <div className='btn' onClick={
                                                () => {
                                                    navigate(`/apply/${jl.id}`)
                                                }
                                            }>Apply Now</div> */}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                }
                {selectedJob !== "" &&
                    <div className='col-sm-12'>
                        <div className='goback'
                            onClick={() => {
                                setSelectedJob("")
                            }}
                        >Go back to JobList</div>
                        <ApplyWidget jobid={selectedJob} />
                    </div>
                }
            </div>
        </div>
    );
}
