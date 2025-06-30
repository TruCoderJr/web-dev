import React, { useContext } from "react";
import { IoMdDoneAll } from "react-icons/io";

import { UserContext } from "../context/Context";
import { FaFlag } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function ViewTask() {
  const { task, setTask } = useContext(UserContext);

  const navigate = useNavigate();

  const handleDone = (eleIdx) => {
    const copy = task.map((ele, idx) =>
      idx == eleIdx ? { ...ele, isDone: !ele.isDone } : ele
    );

    for (let i = 0; i < copy.length; i++) {
        const val = copy[i];
        localStorage.setItem(i,JSON.stringify(val));
      }

    setTask(copy);
  };

  const priorityCol = (priority) => {
    if (priority == "low") {
      return "text-green-500";
    } else if (priority == "normal") {
      return "text-blue-500";
    } else if (priority == "high") {
      return "text-orange-500";
    } else if (priority == "urgent") {
      return "text-red-500";
    }
    return "text-gray-500";
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="box-border h-full min-h-screen p-3 w-full bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-300">
      <div className="p-3 bg-zinc-100 w-2/3 m-auto rounded mt-32 shadow-lg ">
        <div className="flex flex-wrap w-full bg-gray-100 gap-4 justify-center">
          {task.length < 1 ? <h1>No Task!!</h1> : ""}
          {task.map((task, idx) => (
            <div key={idx} className="m-1 ">
              <div className={`lg:w-72 sm:w-full bg-yellow-100 px-8 pt-2 pb-4 rounded-lg overflow-hidden text-start relative ${task.isDone?"opacity-50":"" }`}>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-1 ">
                  {task.task}
                </h1>
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-900 mb-3">
                  {task.deadline
                    ? new Date(task.deadline).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long", 
                      year: "numeric",
                      })
                    : "No deadline"}
                </h2>
                <button className="min-w-max inline-flex items-center justify-center border-0 py-2 px-6 focus:outline-none rounded outline outline-offset-2 outline-blue-500 mb-2">
                  {task.priority}{" "}
                  <FaFlag className={`ml-2 ${priorityCol(task.priority)}`} />
                </button>

                {task.desc != "" ? (
                  <p className="leading-relaxed mb-2">{task.desc}</p>
                ) : (
                  ""
                )}

                <button
                  type="button"
                  onClick={() => handleDone(idx)}
                  className="inline-flex min-w-[128px] items-center justify-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                >
                  {task.isDone ? "finished" : "finish"}
                  {task.isDone ? <IoMdDoneAll className="ml-2"/> : ""}
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={goBack}
          className="w-full inline-flex items-center justify-center text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded mt-5"
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default ViewTask;
