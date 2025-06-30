import { useState } from 'react'
import './App.css'
import React from 'react';
import {Link, Routes, Route} from "react-router-dom"
import Home from './Components/Home';
import User from './Components/User';
import About from './Components/About';
import Contact from './Components/Contact';
import Nav from './Components/Nav';
import Rout from './utils/Rout';
function App() {

  return (
    <>
      <Nav />

      <Rout />
    </>
  )
}

export default App
