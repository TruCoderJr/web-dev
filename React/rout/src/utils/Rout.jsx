import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../Components/Home';
import User from '../Components/User';
import About from '../Components/About';
import Contact from '../Components/Contact';
import UserDetail from '../Components/UserDetail';

const Rout = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/user' element={<User />}/>
        <Route path='/user/:name' element={<UserDetail />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
  )
}

export default Rout;