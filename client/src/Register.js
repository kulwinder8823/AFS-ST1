import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Otp from './Otp';
import { useNavigate } from "react-router-dom";

function generateOTP(length) {
  const digits = '0123456789';
  let OTP = '';

  for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * 10);
      OTP += digits[index];
  }

  return OTP;
}


const Register = () => {
    const [data, setData] = useState({
        email: '',
    });
    const navigate = useNavigate();
    const registerUser = async (e) => {
        e.preventDefault();
        const { email } = data;
        console.log(email);
        const otp = generateOTP(6);
        navigate(`/Otp?otp=${otp}`);
        try { 
            const { data } = await axios.post('http://localhost:80/register', { email, otp });
          
            if (data.error) {
              console.log(data.error);
            } else {
              console.log("Email Sent Successfully");
            }
          } catch (error) {
            console.error('Error during registration:', error);
          }
    }

  return (
    <div>
        <form onSubmit={registerUser}>
            <label className='label'>Email</label>
            <input className='input' type='email' placeholder='enter email...' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>

            <button className='button' type='submit' >Send OTP</button>
        </form>
    </div>
  )
}

export default Register;