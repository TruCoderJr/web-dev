import React from "react";

function ProfileCard({ ele }) {
    
  return (
    <div className="w-full flex p-2">
      
      <div class="w-20 h-20 rounded-full overflow-hidden bg-zinc-400">
        <img className="w-full h-full object-cover" src={ele.img} alt="" />
      </div>
      <div className="p-2">
        <h2 className="font-semibold">{ele.name}</h2>
        <p>{ele.age} Years</p>
      </div>
    </div>
  );
}

export default ProfileCard;
