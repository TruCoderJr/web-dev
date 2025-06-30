import React, { useState } from "react";
import Button from "./utils/Button";
import ProfileCard from "./ProfileCard";

function App() {
  const users = [
    {
      name: "Rohan Sharama",
      age: 22,
      img: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Sohan Kumari",
      age: 35,
      img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Emi Donald",
      age: 25,
      img: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Ssai Pallavi",
      age: 31,
      img: "https://images.unsplash.com/photo-1591727884968-cc11135a19b3?q=80&w=2024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [user, setUser] = useState(users);
  return (
    <div className="bg-red-700 w-screen h-screen">
      <div className="w-1/2 bg-zinc-200 m-auto p-3">
        <h1>{user.length} List of Student</h1>
        {user.map((ele, idx) => (
          <ProfileCard key={idx} ele={ele} />
        ))}

        <button onClick={()=> setUser([])} className="w-full text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded mt-3">
          Clear All
        </button>
      </div>
    </div>
  );
}

export default App;
