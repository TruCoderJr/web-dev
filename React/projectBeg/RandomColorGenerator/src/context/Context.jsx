// Context.jsx
import { formatRFC3339 } from "date-fns";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
export const UserContext = createContext();

function Context(props) {
  
  return (
    <>
      <UserContext.Provider value={{ task, setTask, btn }}>
        {props.children}
      </UserContext.Provider>
    </>
  );
}

export default Context;
