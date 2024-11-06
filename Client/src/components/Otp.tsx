import React, { useState } from 'react'
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';

const Otp:React.FC = () => {
    const [otp,setOtp]=useState<string>()
    const navigate=useNavigate()
    const otphandler=()=>{
            navigate("/home")
    }
  return (
     <div>
        <h1>Enter Otp</h1>
     <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />
    <button onClick={otphandler}>Submit</button>
     </div>
  )
}

export default Otp
