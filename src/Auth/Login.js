import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "../Axios/Axios";
const Login = () => {
  const[user,setUser] = useState({
      first_name:'',
      last_name:'',
      email:'',
      mobile:'',
      password:'',
      gender:''
  })

  const handleLogin = (e) => {
    setUser({...user,[e.target.name]:e.target.value})
  }

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userdata = {
      first_name:user.first_name,
      last_name:user.last_name,
      email:user.email,
      mobile:user.mobile,
      password:user.password,
      gender:user.gender
    }

    const res = await axios.post('/login',userdata)
    if(res.data.statuscode === 'TXN'){
      localStorage.setItem('login',JSON.stringify(res.data))
      alert("Login sucess");
      navigate('/Home')
    }
  }
  return (
    <>
      <div className="container">
        <header>Login</header>
        <form onSubmit={handleSubmit} >
          <div className="form first">
            <div className="details personal">
              <div className="field_grid">
                <div className="input_field">
                  <label>Mobile Number</label>
                  <input type="text" placeholder='Enter mobile' value={user.mobile} name="mobile" onChange={handleLogin} autoComplete="off" required/>
                  <span className="error"></span>
                </div>

                <div className="input_field">
                  <label>Password</label>
                  <input type="text" placeholder='Enter password' value={user.password}
                    onChange={handleLogin} name="password" autoComplete="new-password" required 
                  />
                  <div className="forget_title"><Link to="/forget">forget Password</Link></div>
                </div>
                <button type="submit" className="sub_btn">Submitdd</button>
              </div>
            </div>

          </div>
        </form>

      </div>
    </>
  )
}

export default Login