import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "../Axios/Axios";
const Login = () => {
  const navigate = useNavigate()
  const[user,setUser] = useState({
      first_name:'',
      last_name:'',
      email:'',
      mobile:'',
      password:'',
      gender:''
  })

  // eyes toggle start
  const [state,setState] = useState(false);
  const toggleBtn = () => {
    setState(prevState => !prevState);
  }
// eyes toggle end

const[formerror,setFormerror] = useState({});
const [issubmit,setSubmit] = useState(false);

  const handleLogin = (e) => {
    setUser({...user,[e.target.name]:e.target.value})
    setSubmit(true);
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormerror(validationform(user));
 
    const userdata = {
      first_name:user.first_name,
      last_name:user.last_name,
      email:user.email,
      mobile:user.mobile,
      password:user.password,
      gender:user.gender
    }
    
    if(Object.keys(formerror).length===0 && issubmit){
      const res = await axios.post('/login',userdata)
      if(res.data.statuscode === 'TXN'){
        localStorage.setItem('login',JSON.stringify(res.data))
        alert("Login sucess");
        navigate('/Home')
      }else {
        alert("invalid credincial");
      }

    }
  
  }


  // validation funtion
  const validationform = (value) => {
    const errors = {};
    const passwordPattern = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    const mobilePattern = /^[0-9]{10}$/;
    if(!value.mobile){
      errors.mobile="please Enter mobile"
    } else if(!mobilePattern.test(value.mobile)){
      errors.mobile="invalid mobile number"
    }
    if(!value.password){
      errors.password="please Enter password"
    } else if(!passwordPattern.test(value.password)){
      errors.password="Enter valid password";
    }
    return errors;
  }
  return (
    <>
    <section className="bg_wrapper">
    <div className="container ">
        <header>Login</header>
        <form onSubmit={handleSubmit} >
          <div className="form first">
            <div className="details personal">
              <div className="field_grid">
                <div className="input_field">
                  <label>Mobile Number</label>
                  <input type="text" placeholder='Enter mobile' value={user.mobile} name="mobile" onChange={handleLogin} autoComplete="off"/>
                  <span className="error">{formerror.mobile}</span>
                </div>

                <div className="input_field">
                  <label>Password</label>
                  <div className="password_wrap">
                  <input type={state ? "text" : "password"} placeholder='Enter password' value={user.password}
                    onChange={handleLogin} name="password" autoComplete="off"/>
                  <div className="eye_icon" onClick={toggleBtn}>
                   {state ? <AiOutlineEyeInvisible/>: <AiOutlineEye/>}
                  </div>
                  </div>
                  
                  
                  <span className="error">{formerror.password}</span>
                  <div className="forget_title"><Link to="/forget">Forget Password?</Link></div>
                </div>
                <button type="submit" className="sub_btn">
                  <div>Login</div>
                </button>
                <div className="register_footer">Already have Account?<Link to="/Resistration">Register now </Link></div>
                
              </div>
            </div>

          </div>
        </form>

      </div>
    </section>
      
    </>
  )
}

export default Login