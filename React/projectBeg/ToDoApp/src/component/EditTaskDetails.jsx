import React, { useContext, useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { UserContext } from "../context/Context";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

function EditTaskDetails() {
  const { task, setTask } = useContext(UserContext);
  const [startDate, setStartDate] = useState(null);
  const { name } = useParams();

  const taskData = task.filter((ele) => ele.task === name);
  const { register, handleSubmit, reset, setValue } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (taskData.length > 0) {
      const taskInfo = taskData[0];
      setValue("taskName", taskInfo.task);
      setValue("priority", taskInfo.priority);
      setValue("desc", taskInfo.desc);
      if (taskInfo.deadline) {
        setStartDate(new Date(taskInfo.deadline));
      }
    }
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  const onSubmit = (data) => {
    const updatedTask = {
      task: data.taskName,
      priority: data.priority,
      deadline: startDate ? startDate.toISOString() : null,
      desc: data.desc,
      isDone: false,
    };

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      let ta = localStorage.getItem(key);
      let d = JSON.parse(ta);
      d.task == name? localStorage.setItem(key, JSON.stringify(updatedTask)) :"";
    }
    const updatedTaskList = task.map((t) =>
      t.task === name ? updatedTask : t
    );

    setTask(updatedTaskList);
    reset();
    setStartDate(null);
    navigate(-1); 
  };

  return (
    <div className="box-border h-screen p-3 w-full bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-300">
      <div className="p-5 bg-zinc-200 w-full max-w-2xl m-auto rounded mt-32 shadow-lg">
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
              className="p-2 w-full border rounded bg-red-200"
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
                className="p-2 w-full border rounded bg-red-200"
                required
              >
                <option value="" disabled hidden>Select</option>
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
                placeholderText="Select date"
                minDate={new Date()}
                required
                className="p-2 w-full border rounded bg-red-200"
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
              className="p-2 w-full border rounded bg-red-200"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
          >
            Update task
          </button>
        </form>

        {/* Back Button */}
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

export default EditTaskDetails;
