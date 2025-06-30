import React from "react";

function NewCard({user, handleRemove}) {
    return(
        <>
        {user.map((ele, idx)=>{
            return <div key={idx} className=" w-52 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-2 ">
                        <div className=" image w-[3vw] h-[3vw] rounded-full bg-zinc-200 overflow-hidden ">
                            <img className= "w-full h-full object-cover"   src={ele.img} alt="" />
                        </div>
                        <h1 className="mt-1 text-xl font-semibold ">{ele.name}</h1>
                        <h4 className="opacity-60 text-xs font-semibold">{ele.email}</h4>
                        <p className=" mt-1 text-center text-xs font-semibold leading-1 tracking-tight "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis error, </p>
                        <button onClick={()=> handleRemove(idx)} className="px-3 py-1 bg-red-600 text-xs rounded-md font-semibold text-white mt-4">Remove</button>
                    </div>
        })}
        </>
    );
}

export default NewCard;