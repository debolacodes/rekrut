
import React, { useState, useContext, useEffect } from 'react';
import logo from './logo.svg';
import './assets/table.css';
import AllRoutes from './route/AllRoutes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { mainFunctions } from "./providers/MainProvider";

function App() {
  const {
    msg, setMsg, errorMsg, setErrorMsg
  } = useContext(mainFunctions)

  useEffect(()=>{
    if(msg !== ""){
      toast.success(msg)
      setTimeout(()=>{
          setMsg("")
      }, 4000);
    }
  },[msg])

  useEffect(()=>{
    if(errorMsg !== ""){
      toast.warning(errorMsg)
      setTimeout(()=>{
          setErrorMsg("")
      }, 4000);
    }
  },[errorMsg])
  return (
    <div className="App">
        <ToastContainer></ToastContainer>
        <AllRoutes />
    </div>
  );
}

export default App;
