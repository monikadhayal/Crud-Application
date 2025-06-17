// import { useNavigate } from "react-router-dom";

// export default function TaskList({ tasks, onDelete }) {
//   const navigate = useNavigate();

//   return (
//     <div className="space-y-4">
//       {tasks.map((task) => (
//         <div key={task.id} className="bg-gray-800 p-4 rounded shadow-md">
//           <h2 className="text-xl font-semibold">{task.title}</h2>
//           <p>{task.description}</p>
//           <div className="flex gap-2 my-2">
//             <span className="bg-yellow-600 px-2 rounded">{task.priority}</span>
//             <span className="bg-gray-600 px-2 rounded">{task.status}</span>
//           </div>
//           <p>Due: {task.dueDate}</p>

//           <div className="flex gap-4 mt-2">
//             <button
//               className="text-blue-400"
//               onClick={() => navigate(`/edit/${task.id}`)}
//             >
//               ✏️ Edit
//             </button>
//             <button className="text-red-500" onClick={() => onDelete(task.id)}>
//               🗑️ Delete
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }






import { useNavigate } from "react-router-dom";

export default function TaskList({ tasks, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {tasks.map((task) => (
        <div key={task.id} className="bg-gray-900 p-5 rounded-md">
          <h2 className="text-xl font-bold">{task.title}</h2>
          <p>{task.description}</p>
          <div className="flex space-x-2 mt-2">
            <span
              className={`px-2 py-1 text-sm rounded bg-${task.priority.toLowerCase()}-700`}
            >
              {task.priority.toLowerCase()}
            </span>
            <span className="bg-gray-700 px-2 py-1 rounded text-sm">
              {task.status.toLowerCase()}
            </span>
          </div>
          <p className="mt-2 text-sm text-gray-400">📅 Due: {task.dueDate}</p>

          <div className="mt-3 flex justify-end space-x-2">
            <button onClick={() => navigate(`/edit/${task.id}`)}>✏️</button>
            <button onClick={() => onDelete(task.id)}>🗑️</button>
          </div>
        </div>
      ))}
    </div>
  );
}
