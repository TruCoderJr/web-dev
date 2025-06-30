import React from "react";
import { FaListCheck } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
        <nav className="fixed top-0 left-0 right-0 z-50 box-border font-semibold text-2xl p-2 flex justify-start gap-20 bg-green-200 shadow-md">
        <NavLink className="ml-2 text-5xl " to="/">
          {<FaListCheck />}
        </NavLink>
        <div className="flex justify-around gap-10 mr-10 items-center	">
          <NavLink className={(e)=> e.isActive? "text-red-600 shadow-xl":""} to="/">Home</NavLink>
          {/* <NavLink className={(e)=> e.isActive? "text-red-600 shadow-xl":""} to="/features">Features</NavLink> */}
          <NavLink className={(e)=> e.isActive? "text-red-600 shadow-xl":""} to="/help">Help</NavLink>
          {/* <NavLink to="/home/:id"></NavLink> */}
        </div>
      </nav>
    </>
  );
}

export default Nav;
