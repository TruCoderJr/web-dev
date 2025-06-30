import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function UserDetail() {
    const {name} = useParams();
    const navigate = useNavigate();
    const handleBack = ()=>{
        // navigate("/user");
        navigate(-1);
    }

  return (
    <div className="w-1/2 m-auto mt-10">
      <h1 className="text-red-200 text-5xl mb-2">About</h1>
      <h1 className='text-2xl mt-3'>Hii! {name}</h1>
      <button onClick={handleBack} className="mt-5 text-white px-3 py-5 bg-red-300 rounded">Go Back</button>
    </div>
  )
}

export default UserDetail