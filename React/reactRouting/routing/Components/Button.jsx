import React from "react";

function Button({text, color}) {
    
    return(
        <>
            <button className={`px-2 py-1 ${color} text-xs font-semibold text-zinc-100 rounded mt-3 m-2`}> {text}</button>
        </>
    );
}

export default Button;