import React, {useContext, useEffect, useState} from 'react';
import SideNav from './components/SideNav';
import { mainFunctions } from "../../providers/MainProvider";
import { useNavigate } from 'react-router-dom';

export default function AdminJobs() {
    const {
        training,
    } = useContext(mainFunctions)
    const [searchText, setSearchText] = useState("")
    const [filteredTrainings, setFilteredTrainings] = useState([])
    
    useEffect(()=>{
        const m = training.filter((q)=>{
          let r = typeof q.title !== "undefined" ? q.title.toString().toLowerCase() : ""
          let s = typeof q.description !== "undefined" ? q.description.toString().toLowerCase() : ""
          let t = typeof q.duration !== "undefined" ? q.duration.toString().toLowerCase() : ""
        //   let t = q.location.toString().toLowerCase()
          let st = searchText.toString().toLowerCase()
          if(r.includes(st) || s.includes(st) || t.includes(st)){
            return true
          }else{
            return false
          }
        })
        setFilteredTrainings(m)
    },[searchText, training])


    return (
        <div className='admin_main'>
            <SideNav />
            <div className='admin_content'>
                <div className='top'>
                    <div className='title'>Trainings</div>
                </div>
                <div className='main_content'>
                <div className='wrap-table100'>
                <input onChange={(e)=>setSearchText(e.target.value)} placeholder="search" className='searchit'/>
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
                        {filteredTrainings.map((jb, index)=>{
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
