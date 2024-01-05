import React from 'react'
import Login from '../components/Login';
import { Route, Routes } from 'react-router-dom';
import Register from '../components/Register';




const Home = () => {
  return (
    <div>
      <div>
      <Login/>
        <Routes>
        <Route path='/Register' element={<Register />} />
        </Routes>
      
      </div>
      
    </div>
  )
}

export default Home ;
