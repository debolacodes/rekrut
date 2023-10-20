import React,{useEffect, useContext} from 'react'
import { mainFunctions } from "../../providers/MainProvider"

export default function () {

    const {
        applications,
        jobList,
        registerations,
        setApplications,
        getDocument,
        setRegisterations,
        thisUser
    } = useContext(mainFunctions)

    useEffect(()=>{
        getDocument('applications', setApplications)
        getDocument('registerations', setRegisterations)
    },[])
  return (
    <div className='row cards'>
        <div className='card col-12 col-sm-6'>
            <div className='inner'>
                <div className='icon jobs'></div>
                <div className='content'>
                    <div className='value'>{applications.length}</div>
                    <div className='text'>Jobs applied</div>
                </div>
            </div>
        </div>
        <div className='card col-12 col-sm-6'>
            <div className='inner'>
                <div className='icon trainings'></div>
                <div className='content'>
                    <div className='value'>{registerations.length}</div>
                    <div className='text'>Trainings Registered</div>
                </div>
            </div>
        </div>
    </div>
  )
}
