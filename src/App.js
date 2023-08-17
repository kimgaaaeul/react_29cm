import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'; 
import Header from './Components/Header';
import Home from 'Pages/Home';
import Wrap from './Components/Wrap';
import Login from './Pages/Login';
import PrivateRouter from './Components/PrivateRouter';
import Best from 'Pages/Best';
import News from 'Pages/News';
import Post from 'Pages/Post';
import Showcase from 'Pages/Showcase';

function App() {
  const [authenticate, setAuthenticate] = useState(false); // true 값이 되면 로그인으로 판단 , false 값이면 로그아웃 상태
  useEffect(() => {
    console.log("login", authenticate)
  }, [authenticate])
  return (
    <div>
      <Header authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route  
        exact path='/' 
        element={<Home />} />
        <Route  
        path='/login' 
        element={<Login setAuthenticate={setAuthenticate}/>} />
        <Route 
        path='/BEST'
        element={<Best />} />
        <Route 
        path='/news/:id'
        element={<News/>} />
        <Route 
        path='/post/:id'
        element={<Post/>} />
        <Route 
        path='/showcase/:id'
        element={<Showcase/>} />
        <Route 
        path='/product/:id' 
        element={<PrivateRouter authenticate={authenticate} />} />
      </Routes>
    </div>
  );
}

export default App;
