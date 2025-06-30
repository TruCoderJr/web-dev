import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Features from "../Features";
import Help from "../Help";
import AddTask from "../AddTask";
import ViewTask from "../ViewTask";
import DeleteTask from "../DeleteTask";
import EditTask from "../EditTask";
import EditTaskDetails from "../EditTaskDetails";

function Rout() {
    
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/features" element={<Features />} /> */}
        <Route path="/help" element={<Help />} />
        <Route path="/ViewTask" element={<ViewTask />} />
        <Route path="/AddTask" element={<AddTask />} />
        <Route path="/DeleteTask" element={<DeleteTask />} />
        <Route path="/EditTask" element={<EditTask />} />
        <Route path="/EditTask/:name" element={<EditTaskDetails />} />
      </Routes>
    </>
  );
}

export default Rout;
