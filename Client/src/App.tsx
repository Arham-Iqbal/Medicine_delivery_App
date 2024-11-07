import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import Otp from './components/Otp';
import Address from './components/Address';
function App() {
  return (
    <div >
      <Routes>
         <Route path="/" element={<Login/>}></Route>
         <Route path='/Otp' element={<Otp/>}></Route>
         <Route path='/home' element={<Home/>}></Route>
         <Route path='/Address' element={<Address/>}></Route>
      </Routes>         
    </div>
  );
}
export default App;
