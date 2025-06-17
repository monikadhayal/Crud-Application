// import TaskForm from "../components/TaskForm";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// export default function AddTaskPage() {
//   const navigate = useNavigate();
//   const [tasks, setTasks] = useState([]);

//   const handleAdd = (task) => {
//     task.id = Date.now();
//     setTasks((prev) => [...prev, task]);
//     navigate("/");
//   };

//   return <TaskForm onSubmit={handleAdd} />;
// }
import TaskForm from "../components/TaskForm";

export default function AddTaskPage() {
  return <TaskForm isEditing={false} />;
}
