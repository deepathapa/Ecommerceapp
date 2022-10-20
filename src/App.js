import React from 'react';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Forget from "./Auth/Forget";
import Login from "./Auth/Login";
import Otp from "./Auth/Otp";
import Registration from './Auth/Registration';
import UpdateOtp from './Auth/UpdateOtp';
import Home from "./Component/Home";

const App = () => {
  return (
    <>
      
      <Routes>
     
        <Route path="/" element={<Home title="Home"/>}/>
        <Route path="/Home" element={<Home title="Home"/>}/>
        <Route path="/Login" element={<Login title="Login"/>}/>
        <Route path="/Resistration" element={<Registration title="Registration"/>}/>
        <Route path="/Home" element={<Home title="Home"/>}/>
        <Route path="/Forget" element={<Forget title="Forget"/>}/>
        <Route path="/Otp" element={<Otp title="otp"/>}/>
        <Route path="/updateOtp" element={<UpdateOtp title="UpdateOtp"/>}/>
      </Routes>
    </>
  )
}

export default App