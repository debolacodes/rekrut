import React, {useContext, useEffect, useState} from 'react';
import SideNav from './components/SideNav';
import { mainFunctions } from "../../providers/MainProvider"
import DashboardNumbers from '../components/DashboardNumbers';

export default function UserApplications() {
    
    const {
        applications,
        userapplications,
        jobList,
        setApplications,
        getDocument
    } = useContext(mainFunctions)

    useEffect(()=>{
        getDocument('applications', setApplications)
    },[])

    const [searchText, setSearchText] = useState('')
    const [filtered, setFiltered] = useState([])
    useEffect(()=>{
        getDocument('applications', setApplications)
    },[])
    useEffect(()=>{
        const m = userapplications.filter((q)=>{
          let r = typeof q.firstName !== "undefined" ? q.firstName.toString().toLowerCase() : ""
          let s = typeof q.lastName !== "undefined" ? q.lastName.toString().toLowerCase() : ""
          let t = typeof q.email !== "undefined" ? q.email.toString().toLowerCase() : ""
        //   let t = q.location.toString().toLowerCase()
          let st = searchText.toString().toLowerCase()
          if(r.includes(st) || s.includes(st) || t.includes(st)){
            return true
          }else{
            return false
          }
        })
        setFiltered(m)
    },[searchText, userapplications])

    return (
        <div className='admin_main'>
            <SideNav />
            <div className='admin_content'>
                <div className='top'>
                    <div className='title'>Jobs</div>
                    <div className='subtitle'>This are the jobs you applied for.</div>
                </div>
                
                <DashboardNumbers />
                <div className='main_content'>
                <div className='wrap-table100'>
                    
                <input onChange={(e)=>setSearchText(e.target.value)} placeholder="search" className='searchit'/>
                <table>
                    <thead>
                        <tr className="table100-head">
                            <th className="column1">S/N</th>
                            <th className="column3">Job</th>
                            <th className="column2">Name</th>
                            <th className="column4">Email</th>
                            <th className="column5">Phone</th>
                            <th className="column6">Introduction</th>
                            <th className="column7">CV</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((item, index)=>{
                        return(
                            <tr key={index}>
                                <td className="column1">{index + 1}</td>
                                <td className="column3"><strong>{typeof jobList[item.job] !== "undefined" ? jobList[item.job].title : ""}</strong></td>
                                <td className="column2">{item.firstName} {item.lastName}</td>
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
