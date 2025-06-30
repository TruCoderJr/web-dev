import React from "react";
import { Link } from "react-router-dom";

function Button({ data }) {
  const slug = data.replace(" ", "");
  return (
    <>
      <Link
        className="w-36 ttransform transition-transform duration-300 ease-in-out hover:scale-105 inline-flex items-center justify-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        to={`/${slug}`}
      >
        {data}
      </Link>
    </>
  );
}

export default Button;
