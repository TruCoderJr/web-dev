import React, { useEffect, useState } from "react";
import axios from './Utils/axios';
function Show() {
  const [products, setProduct] = useState([]);

  useEffect(()=>{
    console.log('Show is updated');
    getProduct();
    return ()=>{
        console.log("Show product is Deleted");
    }

  },[]);

  const getProduct = () => {
    axios
      .get("/products")
      .then((res) => {
        setProduct(res.data);
        // console.log(res.data);
        // console.log(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <button
        type="button"
        className="px-2 py-2 bg-blue-600 rounded"
      >
        Products
      </button>
      <ul>
        {products.length > 0 ? (
          products.map((pro, idx) => (
            <li className="rounded w-1/2 p-5 bg-red-300 m-3" key={idx}>
              {pro.title}
            </li>
          ))
        ) : (
          <li className="m-3">Loading...</li>
        )}
      </ul>
    </div>
  );
}

export default Show;
