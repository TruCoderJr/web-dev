import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="w-full h-1/5 flex items-center gap-10 bg-amber-700 px-6 py-4 text-xl sticky top-0 z-50 ">
      <NavLink
        style={(e) => {
          return { color: e.isActive ? "#00f5d4" : "" };
        }}
        className="text-xl font-bold text-white"
        to="/"
      >
        Home
      </NavLink>

      <NavLink to="/user">
        {(e) => (
          <span
            className={[
              e.isActive
                ? "bg-zinc-100 text-black rounded"
                : "text-xl font-bold text-white",
            ].join(" ")}
          >
            User
          </span>
        )}
      </NavLink>

      <NavLink className="text-xl font-bold text-white" to="/about">
        About
      </NavLink>

      <NavLink
        className={(e) => {
          return [
            e.isActive ? "bg-zinc-100" : "",
            e.isActive ? "text-black" : "",
            e.isActive ? "rounded" : "",
            !e.isActive ? "text-xl" : "",
            !e.isActive ? "font-bold" : "",
            !e.isActive ? "text-white" : "",
          ].join(" ");
        }}
        to="/contact"
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default Nav;
