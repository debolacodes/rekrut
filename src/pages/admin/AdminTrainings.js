import React, {useContext, useEffect} from 'react';
import SideNav from './components/SideNav';
import { mainFunctions } from "../../providers/MainProvider";
import { useNavigate } from 'react-router-dom';

export default function AdminJobs() {
    const {
        job,
    } = useContext(mainFunctions)
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
                            <th class="column2">Title</th>
                            <th class="column3">Company</th>
                            <th class="column4">Location</th>
                            <th class="column5">Type</th>
                            <th class="column6">Description</th>
                            <th class="column7">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {job.map((jb, index)=>{
                        return(
                            <tr>
                                <td class="column1">{index + 1}</td>
                                <td class="column2">{jb.title}</td>
                                <td class="column3">{jb.company_name}</td>
                                <td class="column4">{jb.location}</td>
                                <td class="column5">{jb.type}</td>
                                <td class="column6">{typeof jb.description !== "undefined" ? jb.description.substring(0, 30) : ""} ...</td>
                                <td class="column7">{typeof jb.details !== "undefined" ? jb.details.substring(0,30)  : ""} ...</td>
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
