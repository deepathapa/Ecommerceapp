import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const Otp = ({mobiledata}) => {
 console.log("deepa",mobiledata)
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location, "useHook location")
  const data = location.state?.id;
  const numberdata = location.state?.mobiledata;
  console.log("USERMOBILE",numberdata);
 

  
  
  const updatePassword = (e) => {
     e.preventDefault();
     if(data){
      navigate('/updateOtp',{state:{id:data}})
    }
     
  }
  return (
    <>
     <section className="bg_wrapper">
     <div className="container">
        <form onSubmit={updatePassword} >
          <div className="form first">
            <div className="details personal">
              <div className="field_grid">
                <div className="input_field">
               <div></div>
                  <label>OTP</label>
                  
                  <input type="text" placeholder='Enter mobile' defaultValue={data} name="username" autoComplete="off" />
                  <span className="error"></span>
                </div>

               
                <button type="submit" className="sub_btn">update  OTP</button>
              </div>
            </div>

          </div>
        </form>
        
      </div>
     </section>
      
    </>
  )
}

export default Otp