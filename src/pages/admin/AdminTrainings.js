import React, {useContext, useEffect} from 'react';
import SideNav from './components/SideNav';
import { mainFunctions } from "../../providers/MainProvider";
import { useNavigate } from 'react-router-dom';

export default function AdminJobs() {
    const {
        training,
    } = useContext(mainFunctions)
    return (
        <div className='admin_main'>
            <SideNav />
            <div className='admin_content'>
                <div className='top'>
                    <div className='title'>Trainings</div>
                </div>
                <div className='main_content'>
                <div className='wrap-table100'>
                <table>
                    <thead>
                        <tr className="table100-head">
                            <th className="column1">S/N</th>
                            <th className="column2">Title</th>
                            <th className="column3">Description</th>
                            <th className="column4">Duration</th>
                            <th className="column5">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {training.map((jb, index)=>{
                        return(
                            <tr key={index}>
                                <td className="column1">{index + 1}</td>
                                <td className="column2">{jb.title}</td>
                                <td className="column3">{jb.description}</td>
                                <td className="column4">{jb.duration}</td>
                                <td className="column5">{jb.amount}</td>
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
