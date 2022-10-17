import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "../Axios/Axios";

const Forget = () => {
  const navigate = useNavigate();
  const [forgetdata, SetForgetdata] = useState(
    {
      username: ''
    }
  );
  const handleforget = (e) => {
    SetForgetdata({ ...forgetdata, [e.target.name]: e.target.value });
  }

  const subimtForget = async (event) => {
    event.preventDefault();
    const sendOtp = {
      username: forgetdata.username,
    }
   const result = await axios.post('/generateOtp', sendOtp)
   if(result.data.statuscode === 'TXN'){
    navigate('/Otp',{state:{id:result.data.data}});
  }
     
  }
  return (
    <>
      <div className="container">
        <form onSubmit={subimtForget} >
          <div className="form first">
            <div className="details personal">
              <div className="field_grid">
                <div className="input_field">
                  <label>Mobile Number</label>
                  <input type="text" placeholder='Enter mobile' value={forgetdata.username} name="username" onChange={handleforget} autoComplete="off" required/>
                  <span className="error"></span>
                </div>

               
                <button type="submit" className="sub_btn">GET OTP</button>
              </div>
            </div>

          </div>
        </form>

      </div>
    </>
  )
}

export default Forget