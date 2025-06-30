import React, { useState } from "react";
import Cards from "./Components/Cards";
import Form from "./Components/Form";

function NewApp() {

    const [user, setUser] = useState([]);

    const handleForm = (data)=>{
        setUser([...user, data])
    }
    function handleRemove(index) {
        const newUser = user.filter((ele, idx)=> idx != index);
        setUser(newUser);
    }
    return(
        <div className="w-full h-screen bg-zinc-200 flex items-center justify-center ">

            <div className="container mx-auto">
                <Cards user={user} handleRemove={handleRemove}/>
                <Form handleForm={handleForm}/>
            </div>
            
        </div>
    );
}

export default NewApp;