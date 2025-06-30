import React from 'react'

function Navbar() {
  return (
    <>
    <div className='w-[80%] m-auto h-[10%] p-2'>
        <div className='flex items-center justify-around'>
            <img className='h-14' src="/logo2.png" alt="FoodBank" />
            <input type='text' className='w-[60%] h-14 shadow-lg border-gray-250 focus:outline-gray-300 border-2 border-solid rounded-lg p-2' />
            <h1 className='text-lg text-gray-500 hover:text-black hover:cursor-pointer '>Log in</h1>
            <h1 className='text-lg text-gray-500 hover:text-black hover:cursor-pointer '>Sign up</h1>
        </div>
    </div>
    </>
  )
}

export default Navbar