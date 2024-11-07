import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [pincode, setPin] = useState<number | undefined>();
  const navigate = useNavigate();
  const location=useLocation()
  const phoneNumber = location.state?.phoneNumber || '';

  const handleSubmit = () => {
    navigate("/address", { state: { pincode,phoneNumber } });
  };

  return (
    <div>
      <h1>This is the home page</h1>
      <label htmlFor="pin">Enter Your Pincode</label>
      <input
        type="number"
        placeholder="Enter your pincode"
        id="pin"
        value={pincode ?? ""}
        onChange={(e) => setPin(Number(e.target.value))}
      />
      <button onClick={handleSubmit}>Enter</button>
    </div>
  );
};

export default Home;
