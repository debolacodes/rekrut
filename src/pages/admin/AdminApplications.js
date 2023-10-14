import React, {useContext, useEffect} from 'react';
import SideNav from './components/SideNav';
import { mainFunctions } from "../../providers/MainProvider";
import { useNavigate } from 'react-router-dom';

export default function AdminApplications() {
    const {
        applications,
        setApplications,
        getDocumentArray
    } = useContext(mainFunctions)

    useEffect(()=>{
        getDocumentArray('applications', setApplications)
    },[])
    return (
        <div className='admin_main'>
            <SideNav />
            <div className='admin_content'>
                <div className='top'>
                    <div className='title'>Jobs</div>
                    <div className='subtitle'>This are the jobs</div>
                </div>
                <div className='main_content'>
                <div className='wrap-table100'>
                <table>
                    <thead>
                        <tr class="table100-head">
                            <th class="column1">S/N</th>
                            <th class="column2">Firstname</th>
                            <th class="column3">Lastname</th>
                            <th class="column4">Email</th>
                            <th class="column5">Phone</th>
                            <th class="column6">Introduction</th>
                            <th class="column7">CV</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map((item, index)=>{
                        return(
                            <tr>
                                <td class="column1">{index + 1}</td>
                                <td class="column2">{item.firstName}</td>
                                <td class="column3">{item.lastName}</td>
                                <td class="column4">{item.email}</td>
                                <td class="column5">{item.phone}</td>
                                <td class="column5">{item.introduction.substring(1, 20)} ...</td>
                                <td class="column5">{item.cv}</td>
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
