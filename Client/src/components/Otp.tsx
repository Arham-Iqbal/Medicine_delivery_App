import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useLocation, useNavigate } from 'react-router-dom';

const Otp: React.FC = () => {
  const [otp, setOtp] = useState<string>('');
  const navigate = useNavigate();
  const location = useLocation();

  const phoneNumber = location.state?.phoneNumber || '';


  const otphandler = () => {
    console.log("Passing phoneNumber:", phoneNumber);
    navigate("/home", { state: { phoneNumber } });
  };

  return (
    <div>
      <h1>Enter OTP</h1>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={4}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
      />
      <button onClick={otphandler}>Submit</button>
    </div>
  );
};

export default Otp;
