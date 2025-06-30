import React from "react";
import { Link, useParams } from "react-router-dom";

const User = () => {
  
  return (
    <div className="w-1/2 m-auto mt-10">
      <h1 className="text-red-200 text-5xl mb-2">User</h1>

      <div className="flex w-1/2 flex-col mt-5 ">
        <Link className="p-3 bg-red-200 text-2x1 mb-3 hover:bg-red-300" to="/user/john" > John </Link>
        <Link className="p-3 bg-red-200 text-2x1 mb-3 hover:bg-red-300" to="/user/ayush" > Ayush </Link>
        <Link className="p-3 bg-red-200 text-2x1 mb-3 hover:bg-red-300" to="/user/anubhav" > Anubhav </Link>
      </div>

      <button className="text-white p-3 bg-green-300 rounded">
        Explore More
      </button>
    </div>
  );
};

export default User;
