import React from "react";
import NewCard from "./NewCard";

function Cards({user, handleRemove}) {
    return(
        <div className="w-full min-h-96 max-h-96 overflow-auto p-4 flex justify-center gap-4 flex-wrap">
            <NewCard user={user} handleRemove={handleRemove}/>
        </div>
    );
}

export default Cards;