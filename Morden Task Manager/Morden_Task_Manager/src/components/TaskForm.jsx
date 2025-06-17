// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function TaskForm({ task = {}, onSubmit }) {
//   const navigate = useNavigate();

//   const [title, setTitle] = useState(task.title || "");
//   const [desc, setDesc] = useState(task.description || "");
//   const [priority, setPriority] = useState(task.priority || "Medium");
//   const [status, setStatus] = useState(task.status || "To Do");
//   const [date, setDate] = useState(
//     task.dueDate ? new Date(task.dueDate) : null
//   );

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({
//       id: task.id || Date.now(),
//       title,
//       description: desc,
//       priority,
//       status,
//       dueDate: date.toLocaleDateString(),
//     });
//   };

//   return (
//     <div className="h-screen bg-black text-white flex justify-center items-center p-4">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md"
//       >
//         <h1 className="text-2xl font-bold mb-4">
//           {task.id ? "Edit Task" : "Create New Task"}
//         </h1>

//         <label className="block mb-1">Title</label>
//         <input
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="w-full p-2 mb-4 text-black rounded"
//           required
//         />

//         <label className="block mb-1">Description</label>
//         <input
//           value={desc}
//           onChange={(e) => setDesc(e.target.value)}
//           className="w-full p-2 mb-4 text-black rounded"
//           required
//         />

//         <label className="block mb-1">Priority</label>
//         <select
//           value={priority}
//           onChange={(e) => setPriority(e.target.value)}
//           className="w-full p-2 mb-4 bg-gray-800 text-white rounded"
//         >
//           <option>Low</option>
//           <option>Medium</option>
//           <option>High</option>
//         </select>

//         <label className="block mb-1">Status</label>
//         <select
//           value={status}
//           onChange={(e) => setStatus(e.target.value)}
//           className="w-full p-2 mb-4 bg-gray-800 text-white rounded"
//         >
//           <option>To Do</option>
//           <option>In Progress</option>
//           <option>Completed</option>
//         </select>

//         <label className="block mb-1">Due Date</label>
//         <DatePicker
//           selected={date}
//           onChange={(d) => setDate(d)}
//           className="w-full p-2 mb-4 bg-gray-800 text-white rounded"
//           placeholderText="Select date"
//         />

//         <div className="flex justify-between">
//           <button type="submit" className="bg-green-600 px-4 py-2 rounded">
//             Save
//           </button>
//           <button
//             type="button"
//             className="bg-red-600 px-4 py-2 rounded"
//             onClick={() => navigate("/")}
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }



import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function TaskForm({ isEditing, taskId }) {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [status, setStatus] = useState("To Do");
  const [dueDate, setDueDate] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);

    if (isEditing && taskId) {
      const taskToEdit = storedTasks.find((t) => t.id === taskId);
      if (taskToEdit) {
        setTitle(taskToEdit.title);
        setDesc(taskToEdit.description);
        setPriority(taskToEdit.priority);
        setStatus(taskToEdit.status);
        setDueDate(new Date(taskToEdit.dueDate));
      }
    }
  }, [isEditing, taskId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !desc || !dueDate) {
      alert("All fields required!");
      return;
    }

    const formattedDate = dueDate
      .toLocaleDateString("en-GB")
      .split("/")
      .join("-");

    if (isEditing) {
      const updatedTasks = tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              title,
              description: desc,
              priority,
              status,
              dueDate: formattedDate,
            }
          : task
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    } else {
      const newTask = {
        id: Date.now().toString(),
        title,
        description: desc,
        priority,
        status,
        dueDate: formattedDate,
      };
      localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
    }

    navigate("/");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-lg w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-4">
          {isEditing ? "Edit Task" : "Create New Task"}
        </h1>

        <label>Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-4 text-black"
        />

        <label>Description</label>
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="w-full p-2 mb-4 text-black"
        />

        <div className="flex space-x-2">
          <div className="w-1/2">
            <label>Priority</label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full p-2 mb-4 bg-gray-800 text-white"
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          <div className="w-1/2">
            <label>Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full p-2 mb-4 bg-gray-800 text-white"
            >
              <option>To Do</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>
        </div>

        <label>Due Date</label>
        <DatePicker
          selected={dueDate}
          onChange={(date) => setDueDate(date)}
          placeholderText="dd-mm-yyyy"
          dateFormat="dd-MM-yyyy"
          className="w-full p-2 mb-4 bg-gray-800 text-white"
        />

        <div className="flex justify-between">
          <button type="submit" className="bg-green-600 px-4 py-2 rounded">
            {isEditing ? "Update Task" : "Create Task"}
          </button>
          <button
            type="button"
            className="bg-red-600 px-4 py-2 rounded"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
