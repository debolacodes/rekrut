import React, {useContext, useEffect} from 'react';
import SideNav from './components/SideNav';
import { mainFunctions } from "../../providers/MainProvider";
import { useNavigate } from 'react-router-dom';
import DashboardNumbers from '../components/DashboardNumbers';

export default function UserRegisterations() {
    const {
        userregisterations,
        trainingList,
        setRegisterations,
        getDocument
    } = useContext(mainFunctions)

    useEffect(()=>{
        getDocument('registerations', setRegisterations)
    },[])
    return (
        <div className='admin_main'>
            <SideNav />
            <div className='admin_content'>
                <div className='top'>
                    <div className='title'>Trainings</div>
                    <div className='subtitle'>This are the trainings you registered for</div>
                </div>
                <div className='main_content'>
                <DashboardNumbers />
                <div className='wrap-table100'>
                <table>
                    <thead>
                        <tr className="table100-head">
                            <th className="column1">S/N</th>
                            <th className="column2">Training</th>
                            <th className="column3">Name</th>
                            <th className="column4">Email</th>
                            <th className="column5">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userregisterations.map((item, index)=>{
                        return(
                            <tr key={index}>
                                <td className="column1">{index + 1}</td>
                                <td className="column2"><strong>{typeof trainingList[item.training] !== "undefined" ? trainingList[item.training].title : ""}</strong></td>
                                <td className="column3">{item.firstName} {item.lastName}</td>
                                <td className="column4">{item.email}</td>
                                <td className="column5">{item.phone}</td>
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
