// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import TaskList from "../components/TaskList";

// export default function HomePage() {
//   const navigate = useNavigate();
//   const [tasks, setTasks] = useState([]);

//   const handleDelete = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

//   return (
//     <div className="min-h-screen bg-black text-white p-4">
//       <button
//         onClick={() => navigate("/add")}
//         className="bg-blue-600 px-4 py-2 rounded mb-4"
//       >
//         + Add New Task
//       </button>

//       <TaskList tasks={tasks} onDelete={handleDelete} />
//     </div>
//   );
// }




import { useEffect, useState } from "react";
import TaskList from "../components/TaskList";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div className="bg-black min-h-screen text-white p-4">
      <h1 className="text-center text-xl mb-4">
        Organize your work and boost productivity
      </h1>
      <button
        className="block mx-auto mb-6 text-white font-bold"
        onClick={() => navigate("/add")}
      >
        + Add New Task
      </button>
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}
