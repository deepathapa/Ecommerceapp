import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "../Axios/Axios";
import Otp from "./Otp";


const Forget = () => {
const navigate = useNavigate();
  const [forgetdata, SetForgetdata] = useState(
   
    {
      username: ''
    }
  );
  //console.log("number",forgetdata);
  console.log("mobiledatanumber",forgetdata)
  const handleforget = (e) => {
    SetForgetdata({ ...forgetdata, [e.target.name]: e.target.value });
  }
   
  const[formerror,setFormerror] = useState({})

  const subimtForget = async (event) => {
    event.preventDefault();
    setFormerror(validationform(forgetdata));
    const sendOtp = {
      username: forgetdata.username,
    }
   const result = await axios.post('/generateOtp', sendOtp)
   console.log("mobilenumber",sendOtp);
   if(result.data.statuscode === 'TXN'){
 
  navigate('/Otp',{state:{id:result.data.data}},{state:{mobiledata:sendOtp}});
  }else {
    alert("User not found");
  }
     
  }

  // validation function
  const validationform = (value) => {
    const errors = {};
    const userPattern = /^[0-9]{10}$/;
    if(!value.username){
      errors.username="please enter mobile number"
    }else if(!userPattern.test(value.username)){
      errors.username="invalid mobile number"
    }
    return errors;
  }
  return (
    <>
     <section className="bg_wrapper">
     <div className="container">
        <form onSubmit={subimtForget} >
          <div className="form first">
            <div className="details personal">
              <div className="field_grid">
                <div className="input_field">
                
                  <label>Mobile Number</label>
                  <input type="text" placeholder='Enter mobile' value={forgetdata.username} name="username" onChange={handleforget} autoComplete="off"/>
                  <span className="error">{formerror.username}</span>
                </div>
                
               
                <button type="submit" className="sub_btn">GET OTP</button>
              </div>
            </div>

          </div>
        </form>
        <Otp />
        
        

      </div>
     </section>
     
      
    </>
  )
}

export default Forget