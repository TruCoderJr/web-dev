import React from "react";

function MusicCard({ data, handlefavouriteBtn, index, handlefavouriteCount }) {
  return (
    <div className="w-60 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="w-full h-32">
        <img className="w-full h-full object-cover" src={data.img} alt={data.name} />
      </div>
      <div className="p-4 text-center">
        <h2 className="font-semibold text-lg">{data.name}</h2>
        <p className="text-gray-500 text-sm">{data.desc}</p>
        <button
          className={`px-4 py-2 mt-4 text-white text-sm font-semibold rounded ${data.favourite ? "bg-blue-600" : "bg-red-600"}`}
          onClick={() => handlefavouriteBtn(index)}>
          {data.favourite ? "Added" : "Add To Favourites"}
        </button>
      </div>
    </div>
  );
}

export default MusicCard;
