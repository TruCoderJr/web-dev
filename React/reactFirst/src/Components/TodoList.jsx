import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState(["Learn React", "Practice DSA"]);

  function addTask(newTask) {
    setTasks([...tasks, ` ${newTask}`]); // New task add kar rahe hain
  }

  return (
    <div>
      <h1>My Tasks:</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <button onClick={()=> addTask(prompt("Enter new task: ")) } className="px-2 py-1 bg-blue-600 text-xs font-semibold text-zinc-100 rounded mt-3">Add Task</button>
    </div>
  );
}

export default TodoList;

