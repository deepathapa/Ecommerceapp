import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const Otp = ({ mobiledata }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const userData = location.state;
  const otp = userData?.otp;
  const userName = userData?.username;
  console.log(`USERMOBILE => ${userName}  OTP => ${otp}`);

  const updatePassword = (e) => {
    e.preventDefault();
    /*   if(data){
      navigate('/updateOtp',{state:{id:data}})
    }
      */
  };
  return (
    <>
      <section className="bg_wrapper">
        <div className="container">
          <form onSubmit={updatePassword}>
            <div className="form first">
              <div className="details personal">
                <div className="field_grid">
                  <div className="input_field">
                    <div></div>
                    <label>OTP</label>

                    <input
                      type="text"
                      placeholder="Enter mobile"
                      defaultValue={''}
                      name="username"
                      autoComplete="off"
                    />
                    <span className="error"></span>
                  </div>

                  <button type="submit" className="sub_btn">
                    update OTP
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Otp