import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

function ImgCard() {
    const [val, setVal] = useState(false);
  return (
    <div className="w-full h-screen bg-zinc-300 flex justify-center items-center">
      <div className=" relative w-60 h-32 flex bg-zinc-500 rounded-md overflow-hidden">
        <img
          className={`shrink-0 transition-transform	duration-300 ${val ? "-translate-x-[100%]": "-translate-x-[0%]"} w-full h-full object-cover`}
          src="https://images.unsplash.com/photo-1741557571786-e922da981949?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
          alt=""/>
          <img
          className={`shrink-0 transition-transform	duration-300 ${val ? "-translate-x-[100%]": "-translate-x-[0%]"} w-full h-full object-cover`}
          src="https://images.unsplash.com/photo-1740166260052-b41e5381bcbb?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""/>
          <span onClick={()=> setVal(()=> !val)} className="w-8 h-8 flex items-center justify-center bg-[#dadada7b] rounded-full bg-zinc-200 absolute bottom-[0%] left-1/2 -translate-x-[50%] -translate-y-[50%]">
          {!val ? <FaArrowRightLong size={".7em"} /> : <FaArrowLeftLong size={".7em"} />}
          </span>
      </div>
    </div>
  );
}

export default ImgCard;
