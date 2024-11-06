import React from 'react'

const Home = () => {
  return (
    <div>
         <h1>This is home page</h1>
         <label htmlFor='pin'>Enter Your Pincode</label>
         <input type='number' placeholder='enter your pincode' id='pin' ></input>
         <button>Enter</button>
    </div>
  )
}

export default Home
