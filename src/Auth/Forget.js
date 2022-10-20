import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../Axios/Axios';
import Otp from './Otp';

const Forget = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState();

  const handleforget = (e) => {
    setUserName(e.target.value);
  };

  const [formerror, setFormerror] = useState({});

  const subimtForget = async (event) => {
    event.preventDefault();
    const sendOtp = {
      username: userName,
    };
    const result = await axios.post('/generateOtp', sendOtp);
    console.log('mobilenumber', sendOtp);
    if (result.data.statuscode === 'TXN') {
      navigate('/Otp', {
        state: { otp: result.data.data, username: userName },
      });
    } else {
      alert('User not found');
    }
  };

  // validation function
  const validationform = (value) => {
    const errors = {};
    const userPattern = /^[0-9]{10}$/;
    if (!value.username) {
      errors.username = 'please enter mobile number';
    } else if (!userPattern.test(value.username)) {
      errors.username = 'invalid mobile number';
    }
    return errors;
  };
  return (
    <>
      <section className="bg_wrapper">
        <div className="container">
          <form onSubmit={subimtForget}>
            <div className="form first">
              <div className="details personal">
                <div className="field_grid">
                  <div className="input_field">
                    <label>Mobile Number</label>
                    <input
                      type="text"
                      placeholder="Enter mobile"
                      value={userName}
                      name="username"
                      onChange={handleforget}
                      autoComplete="off"
                    />
                    <span className="error">{formerror.username}</span>
                  </div>

                  <button type="submit" className="sub_btn">
                    GET OTP
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

export default Forget;
