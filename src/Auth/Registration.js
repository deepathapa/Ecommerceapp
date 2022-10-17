import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "../Axios/Axios";
import "./auth.css";
import FormInput from './FormInput';
import { inputs } from "./registrationsdata";
const Registration = () => {
  const [values, setValues] = useState(
    {
    first_name:"",
    last_name:"",
    email:"",
    mobile:"",
    password:"",
    gender:"",
  })

  const onChange = (e) => {
    setValues({...values,[e.target.name]: e.target.value});
  }
 
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const senddata = {
      first_name:values.first_name,
      last_name:values.last_name,
      email:values.email,
      mobile:values.mobile,
      password:values.password,
      gender:values.gender
      
    }

      const res = await axios.post('/register',senddata)
      if(res.data.statuscode === 'TXN'){
        alert("Rejister sucess");
        navigate('/Login')
      }

      
    
  }




  return (
    <>
      <div className="container">
        <header>Registration</header>
        <form onSubmit={handleSubmit}>
          <div className="form first">
            <div className="details personal">
              <div className="field_grid">
                {inputs.map((input) => (
                  <FormInput key={input.id} {...input} value={values[input.name]} autoComplete="off" onChange={onChange}/>
                ))}
                <button type="submit" className="sub_btn">Submit</button>
              </div>
            </div>

          </div>
        </form>

      </div>
    </>
  )
}

export default Registration