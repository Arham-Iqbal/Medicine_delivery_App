import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Address:React.FC = () => {
  const [showManualInput, setShowManualInput] = useState<boolean>(false);
  const location =useLocation()
  const {phoneNumber}=location.state || {}
  const {pincode}=location.state || {}
  const[phonenum,setphonenum]=useState<string>(phoneNumber||"")
  const [pin,setpin]=useState<number|"">(pincode)
  useEffect(()=>{
    if(phoneNumber && pincode)
    {
        setphonenum(phoneNumber)
        setpin(pincode)
    }

  },[phoneNumber,pincode])
  const handleLocationAuto = () => {
    // Logic for automatic location retrieval (if needed)
  };

  const handleLocationManually = () => {
    setShowManualInput(true);
  };

  return (
    <div>
      <h1>Enter Your Location</h1>
      
      {/* Conditional rendering for buttons */}
      {!showManualInput && (
        <button onClick={handleLocationManually} className="bg-green-500 text-white px-4 py-2 rounded mr-2">
          Enter Location Manually
        </button>
      )}
      
      <button onClick={handleLocationAuto} className="bg-blue-500 text-white px-4 py-2 rounded">
        Enable Location
      </button>
      
      {/* Show manual input form only if showManualInput is true */}
      {showManualInput && (
        <div className="mt-4 space-y-4">
          {/* Address Section */}
          <h2>Enter Address Details</h2>
          
          <label htmlFor="city">Enter city (Required)</label>
          <input type="text" placeholder="Enter city" id="city" required className="p-2 border border-gray-300 rounded w-full" />
          
          <label htmlFor="pin">Enter Pincode (Required)</label>
          <input  value={pin}   type="number" placeholder="Enter pincode" id="pin"
          onChange={(e)=>setpin(Number(e.target.value))} required className="p-2 border border-gray-300 rounded w-full 
            " />
          
          <label htmlFor="houseno">Enter House No/Flat/Building Name (Required)</label>
          <input type="text" placeholder="Enter house details" id="houseno" required className="p-2 border border-gray-300 rounded w-full" />
          
          <label htmlFor="floor">Floor (Optional)</label>
          <input type="number" id="floor" placeholder="Enter floor" className="p-2 border border-gray-300 rounded w-full" />
          
          <label htmlFor="area">Area/Sector/Locality (Required)</label>
          <input type="text" id="area" placeholder="Enter area" required className="p-2 border border-gray-300 rounded w-full" />
          
          <label htmlFor="landmark">Enter Landmark (Optional)</label>
          <input type="text" id="landmark" placeholder="Enter landmark" className="p-2 border border-gray-300 rounded w-full" />

          {/* User Details Section */}
          <h2>Enter Your Details</h2>
          
          <label htmlFor="name">Your Name (Required)</label>
          <input type="text" placeholder="Your name" id="name" required className="p-2 border border-gray-300 rounded w-full" />
          
          <label htmlFor="phonenum">Enter Your Phone Number (Required)</label>
          <input type="number" id="phonenum" placeholder="Enter your phone number" required className="p-2 border border-gray-300 rounded w-full" value={phonenum}
          onChange={(e)=>setphonenum(e.target.value)}  />
        </div>
      )}
    </div>
  );
};

export default Address;
