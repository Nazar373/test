import { useState } from "react";
import ModalTask from "../ModalTask/ModalTask";

const Task = ({ task, tasks }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toggleStatus, setToggleStatus] = useState(task.status);

  const onChange = (e) => {
    setToggleStatus(e.currentTarget.checked);

    const updatedTask = { ...task, status: e.currentTarget.checked };
    const currentIndex = tasks.tasks.findIndex((t) => t.id === updatedTask.id);
    tasks.tasks[currentIndex] = updatedTask;
    localStorage.setItem("tasks", JSON.stringify(tasks.tasks));
  };

  return (
    <tr>
      <td>{task.id}</td>
      <td>{task.title}</td>
      <td onClick={() => setIsModalOpen(true)} style={{ cursor: "pointer" }}>
        {task.description}
      </td>
      <td>
        <input type="checkbox" checked={toggleStatus} onChange={onChange} />
        {isModalOpen && (
          <ModalTask
          toggleStatus={toggleStatus}
            onChange={onChange}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            task={task}
          />
        )}
      </td>
    </tr>
  );
};

export { Task };
