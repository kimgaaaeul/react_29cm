import React from 'react'
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ProductAll from '../Components/ProductAll';
// import ProductDetail from './Components/ProductDetail';
import PrivateRouter from '../Components/PrivateRouter';
import Wrap from '../Components/Wrap';
import Header from '../Components/Header';



function Best() {
  const navigate = useNavigate();
  const [authenticate, setAuthenticate] = useState(false); // true 값이 되면 로그인으로 판단 , false 값이면 로그아웃 상태
  useEffect(() => {
    console.log("login", authenticate)
  }, [authenticate])

  // const navigateBest = () => {
  //   navigate('/Best')
  // }
  return (
    <div>  
      <Wrap />
      <ProductAll />
      {/* <Route 
        path='/product/:id' 
        element={<PrivateRouter authenticate={authenticate} />} /> */}
    </div>
  );
}


export default Best
