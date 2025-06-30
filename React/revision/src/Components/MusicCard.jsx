import React from "react";

function MusicCard({ ele, idx,HandleFav}) {
  return (
    <div className="w-52  rounded-lg shadow-md overflow-hidden">
      <div className="w-52 h-32 bg-zinc-300">
        <img className="w-full h-full object-cover" src={ele.img} alt="" />
      </div>

      <div className="w-full px-3 py-4">
        <h2 className="font-semibold">{ele.name}</h2>
        <p className="text-xs mt-3">{ele.desc}</p>
        <button onClick={()=> HandleFav(idx)}
          className={`px-4 py-1 ${
            ele.favourite ? "bg-blue-600" : "bg-red-600"
          }  text-xs rounded text-zinc-100 mt-3`}
        >
          {ele.favourite ? `Favorite` : `Add Favorite`}
        </button>
      </div>
    </div>
  );
}

export default MusicCard;
