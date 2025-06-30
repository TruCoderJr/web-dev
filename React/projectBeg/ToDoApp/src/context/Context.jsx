// Context.jsx
import { formatRFC3339 } from "date-fns";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
export const UserContext = createContext();

function Context(props) {
  const [btn, setBtn] = useState([
    "Add Task",
    "View Task",
    "Edit Task",
    "Delete Task",
  ]);


  const taskData = [
    {
      task: "Coding",
      priority: "high",
      deadline: "2025-05-23",
      desc: "Must complete exercise",
      isDone: false,
    },
    {
      task: "Write blog post",
      priority: "normal",
      deadline: "2025-05-25",
      desc: "Write a blog about React hooks",
      isDone: false,
    },
    {
      task: "Team meeting",
      priority: "urgent",
      deadline: "2025-05-24",
      desc: "Discuss sprint goals and blockers",
      isDone: false,
    },
    {
      task: "Read book",
      priority: "low",
      deadline: "2025-05-30",
      desc: "Finish reading Clean Code",
      isDone: false,
    },
    {
      task: "UI design update",
      priority: "high",
      deadline: "2025-05-27",
      desc: "Update the dashboard layout based on feedback",
      isDone: false,
    },
  ];

  const [task, setTask] = useState([]);
  
  useEffect(() => {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const val = JSON.parse(localStorage.getItem(key));
        setTask((prev) => [val, ...prev]);
      }
    // for (let i = 0; i < taskData.length; i++) {
    //   const element = taskData[i];
    //   localStorage.setItem(i,JSON.stringify(element)) 
    // }

  }, [setTask]);

  return (
    <>
      <UserContext.Provider value={{ task, setTask, btn }}>
        {props.children}
      </UserContext.Provider>
    </>
  );
}

export default Context;
