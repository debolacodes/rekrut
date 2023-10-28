import React, {useContext, useEffect, useState} from 'react';
import SideNav from './components/SideNav';
import { mainFunctions } from "../../providers/MainProvider";
import { useNavigate } from 'react-router-dom';

export default function AdminJobs() {
    const {
        registerations,
        messages,
        setMessages,
        job,
        setRegisterations,
        getDocument
    } = useContext(mainFunctions)

    useEffect(()=>{
        getDocument('contactus', setMessages)
    },[])

    useEffect(()=>{
        console.log(messages)
    },[messages])

    const [searchText, setSearchText] = useState("")
    const [filtered, setFiltered] = useState([])
    
    useEffect(()=>{
        const m = messages.filter((q)=>{
          let r = typeof q.title !== "undefined" ? q.title.toString().toLowerCase() : ""
          let s = typeof q.description !== "undefined" ? q.description.toString().toLowerCase() : ""
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
    },[searchText, messages])
    return (
        <div className='admin_main'>
            <SideNav />
            <div className='admin_content'>
                <div className='top'>
                    <div className='title'>Messages</div>
                </div>
                <div className='main_content'>
                <div className='wrap-table100'>
                <input onChange={(e)=>setSearchText(e.target.value)} placeholder="search" className='searchit'/>
                <table>
                    <thead>
                        <tr className="table100-head">
                            <th className="column1">S/N</th>
                            <th className="column2">First Name</th>
                            <th className="column3">Last Name</th>
                            <th className="column4">Email</th>
                            <th className="column5">Message</th>
                            <th className="column6">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((jb, index)=>{
                        return(
                            <tr key={index}>
                                <td className="column1">{index + 1}</td>
                                <td className="column2">{jb.firstName}</td>
                                <td className="column3">{jb.lastName}</td>
                                <td className="column5">{jb.email}</td>
                                <td className="column4">{jb.message}</td>
                                <td className="column5">{jb.phone}</td>
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
