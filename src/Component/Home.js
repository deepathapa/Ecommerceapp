import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css";
import Header from "./Header";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem('login')){
      navigate('/Login')
    }
  })
  return (
    <>
      <Header/>
    <div>Home</div>
    </>
    
  )
}

export default Home