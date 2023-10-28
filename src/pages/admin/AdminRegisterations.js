import React, {useContext, useEffect, useState} from 'react';
import SideNav from './components/SideNav';
import { mainFunctions } from "../../providers/MainProvider";
import { useNavigate } from 'react-router-dom';

export default function AdminRegisterations() {
    const {
        registerations,
        trainingList,
        setRegisterations,
        getDocument
    } = useContext(mainFunctions)
    const [searchText, setSearchText] = useState('')
    const [filtered, setFiltered] = useState([])
    useEffect(()=>{
        const m = registerations.filter((q)=>{
          let r = typeof q.firstName !== "undefined" ? q.firstName.toString().toLowerCase() : ""
          let s = typeof q.lastName !== "undefined" ? q.lastName.toString().toLowerCase() : ""
          let t = typeof q.email !== "undefined" ? q.email.toString().toLowerCase() : ""
          let u = typeof trainingList[q.training] !== "undefined" ? trainingList[q.training].title.toString().toLowerCase() : ""
        //   let t = q.location.toString().toLowerCase()
          let st = searchText.toString().toLowerCase()
          if(r.includes(st) || s.includes(st) || t.includes(st) || u.includes(st)){
            return true
          }else{
            return false
          }
        })
        setFiltered(m)
    },[searchText, registerations, trainingList])

    useEffect(()=>{
        getDocument('registerations', setRegisterations)
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
                <input onChange={(e)=>setSearchText(e.target.value)} placeholder="search" className='searchit'/>
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
                        {filtered.map((item, index)=>{
                        return(
                            <tr key={index}>
                                <td className="column1">{index + 1}</td>
                                <td className="column2">{typeof trainingList[item.training] !== "undefined" ? trainingList[item.training].title : ""}</td>
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
