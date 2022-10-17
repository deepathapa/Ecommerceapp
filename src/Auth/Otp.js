import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Otp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location, "useHook location")
  const data = location.state?.id;
  
  const updatePassword = (e) => {
     e.preventDefault();
     if(data){
      navigate('/updateOtp')
    }
     
  }
  return (
    <>
      <div className="container">
        <form onSubmit={updatePassword} >
          <div className="form first">
            <div className="details personal">
              <div className="field_grid">
                <div className="input_field">
                  <label>OTP</label>
                  <input type="text" placeholder='Enter mobile' value={data} name="username" autoComplete="off" required/>
                  <span className="error"></span>
                </div>

               
                <button type="submit" className="sub_btn">update  OTP</button>
              </div>
            </div>

          </div>
        </form>

      </div>
    </>
  )
}

export default Otp