import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { UserContext } from "../context/Context";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function AddTask() {
  const { task, setTask } = useContext(UserContext);
  const [startDate, setStartDate] = useState(null);

  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const onSubmit = (data) => {
    let newTask = {
      task: data.taskName,
      priority: data.priority,
      deadline: startDate
        ? `${startDate.getFullYear()}-${(
            startDate.getMonth() + 1).toString().padStart(2, "0")}-${startDate.getDate().toString().padStart(2, "0")}`
        : null,
      desc: data.desc,
      isDone: false,
    };

    let prevData=[];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      let pd = localStorage.getItem(key)
      prevData.push(JSON.parse(pd));
    }

    localStorage.setItem(0, JSON.stringify(newTask));

    let currIdx = 1;
    for (let i = 0; i < prevData.length; i++) {
      const da = prevData[i];
      localStorage.setItem(currIdx, JSON.stringify(da));
      currIdx++;
    }
    
    setTask((prev) => {
      const newtask = [newTask, ...prev];
      return newtask;
    });

    setStartDate(null);
    reset();
  };

  return (
    <div className="box-border h-screen p-3 w-full bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-300">
      <div className="p-5 bg-zinc-200 max-w-2xl m-auto rounded mt-32 shadow-xl">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          {/* Task Name */}
          <div>
            <label htmlFor="task" className="block mb-1 font-medium">
              Task:
            </label>
            <input
              id="task"
              type="text"
              {...register("taskName")}
              placeholder="Enter task name"
              className="p-2 w-full border rounded"
              required
            />
          </div>

          {/* Priority + Deadline */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Priority Select */}
            <div className="w-full md:w-1/2">
              <label htmlFor="priority" className="block mb-1 font-medium">
                Priority:
              </label>
              <select
                id="priority"
                {...register("priority")}
                className="p-2 w-full border rounded"
                required
              >
                <option value="" disabled selected hidden>
                  Select
                </option>
                <option value="low">Low</option>
                <option value="normal">Normal</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>

            {/* Deadline Picker */}
            <div className="w-full md:w-1/2">
              <label className="block mb-1 font-medium">Deadline:</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="yyyy-MM-dd"
                className="p-2 w-full border rounded"
                placeholderText="Select date"
                minDate={new Date()}
                required
              />
            </div>
          </div>

          {/* Optional: Description */}
          <div>
            <label htmlFor="description" className="block mb-1 font-medium">
              Description:
            </label>
            <textarea
              id="description"
              {...register("desc")}
              placeholder="Enter task description"
              rows={3}
              className="p-2 w-full border rounded"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none shodow hover:bg-indigo-600 hover:shodow-xl rounded"
          >
            Add task
          </button>
        </form>
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

export default AddTask;
