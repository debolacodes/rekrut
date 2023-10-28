import React, {useContext, useEffect} from 'react';
import SideNav from './components/SideNav';
import { mainFunctions } from "../../providers/MainProvider"
import DashboardNumbers from '../components/AllDashboardNumbers';

export default function UserDashboard() {
    
    const {
        applications,
        jobList,
        job,
        registerations,
        setApplications,
        getDocument,
        setRegisterations
    } = useContext(mainFunctions)

    useEffect(()=>{
        getDocument('applications', setApplications)
        getDocument('registerations', setRegisterations)
    },[])

    return (
        <div className='admin_main'>
            <SideNav />
            <div className='admin_content'>
                <div className='top'>
                    <div className='title'>Dashboard</div>
                    <div className='subtitle'>This are the jobs</div>
                </div>
                
                <div className='main_content'>
                <DashboardNumbers />
                </div>
            </div>
        </div>
    );
}
