import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "../Axios/Axios";

const UpdateOtp = () => {
  const navigate = useNavigate();
  const [getOtp, SetGetOtp] = useState(
    {
      username: "",
      otp: "",
      password: "",
      confirmPassword:""
    }
  )

 const[formerror,setFormerror] = useState({});
 const location = useLocation();
  console.log(location, "useHook location")
  const data = location.state?.id;


 

  const handleOtp = (e) => {
    SetGetOtp({ ...getOtp, [e.target.name]: e.target.value });
   
  }

  const subimtOtp = async(event) => {
    event.preventDefault();
    setFormerror(validationform(getOtp));

    const sendOtp = {
      username: getOtp.username,
     
    }

    
      const res = await axios.post('/updatePassword',sendOtp)
      if(res.data.statuscode === 'TXN'){
        alert("Password Updated Successfully");
        navigate('/Login')
      }else {
        alert("invalid credincial");
      }

  }


  // validation function
  const validationform = (value) => {
    const errors = {};
    const passwordPattern = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    if(!value.password){
      errors.password="please Enter password"
    } else if(!passwordPattern.test(value.password)){
      errors.password="Enter valid password";
    }

    if(!value.confirmPassword){
      errors.confirmPassword="please enter  password"
    } else if(value.confirmPassword !== value.password){
      errors.confirmPassword="Password and Confirm Password does not match.";
    }
    return errors;
  }


  // getdata from localstorage
  const userData = (localStorage.getItem("login"));
  console.log(userData);
  
  return (
   <>
    <section className="bg_wrapper">
    <div className="container">
        <form onSubmit={subimtOtp} >
          <div className="form first">
            <div className="details personal">
              <div className="field_grid">
             
                <div className="input_field">
                <label>mobile</label>
                  <input type="text" name="username" placeholder="Enter otp"  onChange={handleOtp} autoComplete="off" />
                  <span className="error"></span>
                </div>

                <div className="input_field">
                <label>otp</label>
                  <input type="text" name="otp" placeholder="Enter otp" defaultValue={data} onChange={handleOtp} autoComplete="off" />
                 
                </div>

                <div className="input_field">
                  <label>Password</label>
                  <input type="text" name="password" placeholder="Enter otp" value={getOtp.password} onChange={handleOtp} autoComplete="off" />
                  <span className="error">{formerror.password}</span>
                </div>

                <div className="input_field">
                  <label>Confirm Password</label>
                  <input type="text" name="confirmPassword" placeholder="Enter otp" value={getOtp.confirmPassword} onChange={handleOtp} autoComplete="off" />
                  <span className="error">{formerror.confirmPassword}</span>
                </div>
                <button type="submit" className="sub_btn">Submit</button>
              </div>
            </div>

          </div>
        </form>

      </div>
    </section>
   
   </>
  )
}

export default UpdateOtp