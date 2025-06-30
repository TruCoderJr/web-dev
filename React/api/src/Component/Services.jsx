import axios from './Utils/axios';
import React, { useEffect, useState } from 'react'

function Services() {
    const [nor, setNor] =useState("This is normal data");
    const [imp, setImp] =useState("This is imporatant data");
    useEffect(()=>{
        console.log("Service componet is created");
        getUser();
        return ()=>{
        console.log("Show product is Deleted");
    }
    },[imp]);

    const getUser = () => {
    axios
      .get("/users")
      .then((res) => {
        // setProduct(res.data);
        console.log(res.data);
        console.log(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
        <h1>{nor}</h1>
        <button onClick={()=> setNor("Normal data has been changed")}
        type="button"
        className="px-2 py-2 bg-red-200 rounded"
      >Change Normal Data</button>
      
      <h1>{imp}</h1>
        <button onClick={()=> setImp("Important data has been changed")}
        type="button"
        className="px-2 py-2 bg-blue-200 rounded"
      >Change Important Data</button>
    </div>
  )
}

export default Services