
import React from "react";

function FriendCard(userData) {
    // console.log(userData);
    
    const {name, profession, img, friends} = userData.values;

  return (
    <div className="w-52 bg-white rounded-md overflow-hidden">
      <div className="w-full h-41 bg-sky-200">
        <img className="w-full h-full object-cover" src={img} alt="" />
      </div>
      <div className="w-full p-3 ">
        <h3 className="text-xl font-semibold">{name} </h3>
        <h5 className="text-xs">{profession} </h5>
        
        <button onClick={()=> userData.handleFriendsBtn(userData.idx)} className={`mt-4 px-3 py-1 text-xs text-white ${ friends? "bg-green-700": "bg-blue-600" } font-semibold rounded-md`}>
          
          { friends? "Following": "Follow" }
        </button>

      </div>
    </div>
  );
}

export default FriendCard;
