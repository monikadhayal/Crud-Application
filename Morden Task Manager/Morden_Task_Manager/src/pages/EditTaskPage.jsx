// import { useParams, useNavigate } from "react-router-dom";
// import TaskForm from "../components/TaskForm";
// import { useState } from "react";

// export default function EditTaskPage() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [tasks, setTasks] = useState([]); // You would fetch this from state or localStorage

//   const task = tasks.find((t) => t.id == id);

//   const handleUpdate = (updatedTask) => {
//     const updatedList = tasks.map((t) => (t.id == id ? updatedTask : t));
//     setTasks(updatedList);
//     navigate("/");
//   };

//   return <TaskForm task={task} onSubmit={handleUpdate} />;
// }

import { useParams } from "react-router-dom";
import TaskForm from "../components/TaskForm";

export default function EditTaskPage() {
  const { id } = useParams();
  return <TaskForm isEditing={true} taskId={id} />;
}
