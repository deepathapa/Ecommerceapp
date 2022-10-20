import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../Auth/css/auth.css";
import axios from "../Axios/Axios";
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
  
  const [formValues,setFormVlaues] = useState(values);
 const [formErrors,setFormErros] = useState({});
 const [isSubmit,setIsSubmit] = useState(false);
 
 
  const navigate = useNavigate()
  const onChange = (e) => {
    setValues({...values,[e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErros(validate(formValues));
    setIsSubmit(true);
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

  useEffect(() => {
    console.log(formErrors)
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues)
    }
  },[formErrors]);

  const validate = (e) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/;
    if(!e.first_name) {
      errors.first_name = "username is required";
    }
    if(!e.email) {
      errors.email = "username is required";
    }
    if(!e.password) {
      errors.password = "username is required";
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