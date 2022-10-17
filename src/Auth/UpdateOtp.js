import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "../Axios/Axios";

const UpdateOtp = () => {
  const navigate = useNavigate();
  const [getOtp, SetGetOtp] = useState(
    {
      username: "",
      otp: "",
      password: ""
    }
  )

  const handleOtp = (e) => {
    SetGetOtp({ ...getOtp, [e.target.name]: e.target.value });
  }

 

  const subimtOtp = async (event) => {
    event.preventDefault();
    const sendOtp = {
      username: getOtp.username,
      otp: getOtp.otp,
      password: getOtp.password
    }
   const result = await axios.post('/updatePassword', sendOtp)
   if(result.data.statuscode === 'TXN'){
    alert('Password Updated Successfully')
          navigate('/Login');
          
  }
     
  }
  return (
   <>
    <div className="container">
        
        <form onSubmit={subimtOtp} >
          <div className="form first">
            <div className="details personal">
              <div className="field_grid">
              <div className="input_field">
                  <label> Enter Mobile</label>
                  <input type="text" name="username" placeholder="Enter Mobile" value={getOtp.username} onChange={handleOtp} autoComplete="off" />
                </div>
                <div className="input_field">
                  <label>Enter Otp</label>
                 
                  <input type="text" name="otp" placeholder="Enter otp" value={getOtp.otp} onChange={handleOtp} autoComplete="off" />
                  <span className="error"></span>
                </div>

                <div className="input_field">
                  <label> Confime Password</label>
                  <input type="text" name="password" placeholder="Enter Password" value={getOtp.password} onChange={handleOtp} autoComplete="off" />
                 
                </div>
                <button type="submit" className="sub_btn">Update</button>
              </div>
            </div>

          </div>
        </form>

      </div>
   </>
  )
}

export default UpdateOtp