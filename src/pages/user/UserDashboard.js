import React, {useContext, useEffect} from 'react';
import SideNav from './components/SideNav';
import { mainFunctions } from "../../providers/MainProvider"
import DashboardNumbers from '../components/DashboardNumbers';

export default function UserDashboard() {
    
    const {
        userapplications,
        jobList,
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
                <div className='wrap-table100'>
                <table>
                    <thead>
                        <tr className="table100-head">
                            <th className="column1">S/N</th>
                            <th className="column2">Name</th>
                            <th className="column3">Job</th>
                            <th className="column4">Email</th>
                            <th className="column5">Phone</th>
                            <th className="column6">Introduction</th>
                            <th className="column7">CV</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userapplications.map((item, index)=>{
                        return(
                            <tr key={index}>
                                <td className="column1">{index + 1}</td>
                                <td className="column2">{item.firstName} {item.lastName}</td>
                                <td className="column3">{typeof jobList[item.job] !== "undefined" ? jobList[item.job].title : ""}</td>
                                <td className="column4">{item.email}</td>
                                <td className="column5">{item.phone}</td>
                                <td className="column5">{item.introduction.substring(1, 20)} ...</td>
                                <td className="column5">{item.cv}</td>
                            </tr>
                        )})}
                       
                    </tbody>
                </table>

                </div>
                </div>
            </div>
        </div>
    );
}
