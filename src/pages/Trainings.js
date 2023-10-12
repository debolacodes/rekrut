import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopHeader from './components/TopHeader';
import Hero from './components/Hero';
import { mainFunctions } from "../providers/MainProvider";
import RegisterNowWidget from './RegisterNowWidget'
export default function Trainings() {
    const [selectedTraining, setSelectedTraining] = useState("")
    const {
        training,
    } = useContext(mainFunctions)
    const navigate = useNavigate()
    return (
        <div>
            <TopHeader />
            <Hero
                title="Find your dream job"
                bg="people_search.svg"
            />
            <div className='section_main'>
                <div className='row'>
                    {selectedTraining === "" &&
                        <div className='col-sm-12'>
                            <div className='section_title'>Trainings</div>
                            <div className='section_subtitle'>We will find the right job that suits you.</div>
                            <div className='trainings_list'>
                                {training.map((jb) => {
                                    return (
                                        <div className={`trainings_item 
                                        ${selectedTraining === jb.id ? "active" : ""}
                                        `} key={jb.id} onClick={() => setSelectedTraining(jb.id)}>
                                            <div className='image'></div>
                                            <div className='inner'>
                                                <div className='title'>{jb.title}</div>
                                                <div className='description'>{jb.description}</div>
                                                <div className='details'>
                                                    <div className='duration'>{jb.duration}</div>
                                                    <div className='price'>{jb.amount}</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                    }
                    {selectedTraining !== "" &&
                        <div className='col-sm-12'>
                            <div className='goback'
                                onClick={() => {
                                    setSelectedTraining("")
                                }}
                            >Go back to Trainings</div>
                            <RegisterNowWidget id={selectedTraining} />
                        </div>
                    }
                </div>
            </div>
        </div >
    );
}
