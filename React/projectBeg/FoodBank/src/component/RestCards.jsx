import React, { useContext } from 'react'
import { UserContext } from '../context/Context'
import RestCard from './RestCard';
function RestCards() {

const {restaurants,restlist } = useContext(UserContext);
// console.log(restaurants);

  return (
    <>
        <div className='w-[80%] m-auto flex justify-center items-center flex-wrap  gap-20 mt-10 mb-10'>
            {restlist.map((ele,idx)=>
                <RestCard key={idx} data={ele} />
            )}
        </div>
    </>
  )
}

export default RestCards