import React, {useContext, useEffect} from 'react';
import SideNav from './components/SideNav';
import { mainFunctions } from "../../providers/MainProvider";
import { useNavigate } from 'react-router-dom';

export default function AdminRegisterations() {
    const {
        registerations,
        setRegisterations,
        getDocumentArray
    } = useContext(mainFunctions)

    useEffect(()=>{
        getDocumentArray('registerations', setRegisterations)
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
                        </tr>
                    </thead>
                    <tbody>
                        {registerations.map((item, index)=>{
                        return(
                            <tr>
                                <td class="column1">{index + 1}</td>
                                <td class="column2">{item.firstName}</td>
                                <td class="column3">{item.lastName}</td>
                                <td class="column4">{item.email}</td>
                                <td class="column5">{item.phone}</td>
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
