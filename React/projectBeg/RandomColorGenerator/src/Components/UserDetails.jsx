import React, { useContext } from 'react'
import { UserContext } from '../context/Context';
import { useNavigate, useParams } from 'react-router-dom';

function UserDetails() {
  const {id} = useParams();
  const {user} = useContext(UserContext);

  const navigate =useNavigate();
  return (
    <div className='ml-10 mt-5 bg-zinc-300 w-1/4 p-1'>
        <h1 className='text-4xl '>{user[id-1].username}</h1>
        <h2 className='text-semibold '>{user[id-1].email}</h2>
        <button onClick={()=> navigate(-1)} className=' m-2 rounded px-2 py-2 bg-blue-500 hover:bg-blue-700'>go back</button>
      </div>
  )
}

export default UserDetails