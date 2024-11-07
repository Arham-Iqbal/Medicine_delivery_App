import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState<string>('');


  const handleGetOtp = () => {
    // Navigate to OTP page and pass the phone number as state
    navigate("/otp", { state: { phoneNumber } });
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="number"
        placeholder="Your phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      /><br />
      <button onClick={handleGetOtp}>Get OTP</button>
    </div>
  );
};

export default Login;
