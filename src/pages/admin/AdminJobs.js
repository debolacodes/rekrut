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
                        <tr className="table100-head">
                            <th className="column1">S/N</th>
                            <th className="column2">Title</th>
                            <th className="column3">Company</th>
                            <th className="column4">Location</th>
                            <th className="column5">Type</th>
                            <th className="column6">Description</th>
                            <th className="column7">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {job.map((jb, index)=>{
                        return(
                            <tr key={index}>
                                <td className="column1">{index + 1}</td>
                                <td className="column2">{jb.title}</td>
                                <td className="column3">{jb.company_name}</td>
                                <td className="column4">{jb.location}</td>
                                <td className="column5">{jb.type}</td>
                                <td className="column6">{typeof jb.description !== "undefined" ? jb.description.substring(0, 30) : ""} ...</td>
                                <td className="column7">{typeof jb.details !== "undefined" ? jb.details.substring(0,30)  : ""} ...</td>
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
