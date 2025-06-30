import React from "react";

function FriendCard({userInfo, keyId, handleClick}) {

    return(
        // <div className='w-full h-screen flex items-center justify-center gap-10 bg-zinc-200'>
            <div key={keyId} className="w-52 bg-zinc-100 rounded-md overflow-hidden">
                <div className="w-52 h-40 bg-zinc-300">
                    <img className="w-full h-full object-cover" src={userInfo.img} alt="" />
                </div>

                <div className='w-full px-3 py-4'>
                    <h2 className='font-semibold'>{userInfo.name}</h2> 
                    {/* <h4 className='font-semibold'>{userInfo.name}</h4> */}
                    <h5 className='text-xs'>{userInfo.profession}</h5>
                    <button onClick={()=>handleClick(keyId)} className={`px-4 py-1 ${!userInfo.isFriend? "bg-blue-600":"bg-green-600"}  text-xs rounded text-zinc-100 mt-3`}>{userInfo.isFriend?`Friended`:`Add Friend`}</button>
                </div>
            </div>
        // </div>
    )
}

export default FriendCard;