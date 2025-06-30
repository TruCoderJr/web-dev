import React from 'react'
import {Navigate, Route, Routes} from "react-router-dom"
import Details from '../Details';
import Home from '../Home';

function Rout() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/india" />} />
        <Route path="/india" element={<Home />} />
        <Route path="/:city" element={<Details />} />
      </Routes>
    </>
  )
}

export default Rout;