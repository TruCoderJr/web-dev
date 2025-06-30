// user.jsx
import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom';
import {UserContext} from '../context/Context.jsx';


function User() {
  const x = useContext(UserContext);
  
  return (
    <div>
      <h1 className='text-3xl'> User</h1>
      <div className='mt-10 '>
        
        {/* <hr className='m-5'/> */}
        {x.user.map((ele,idx)=><Link to={`/user/${ele.id}`} key={idx} className='flex flex-col w-1/5 p-1 bg-red-200 m-2 rounded'>{ele.username}</Link>)}
      </div>
      <Outlet />
    </div>
  )
}

export default User;