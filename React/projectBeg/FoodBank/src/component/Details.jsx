import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar';

function Details() {
    const {city} = useParams();

  return (
    <>
        <Navbar />
        <div>This is Details page</div>
    </>
  )
}

export default Details