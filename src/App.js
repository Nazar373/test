import { useEffect, useState } from "react";

import Form from "./components/Form/Form";
import Tasks from "./components/Tasks/Tasks";

function App() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  // це погана практика, тому що якщо додати можливість видалення таски,
  //то тоді айдішка буде повторюватись. Але в ТЗ вказано, щ
  // що
  const id = tasks.length + 1;

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title, description) => {
    if (tasks.length && tasks.find((task) => task.title === title)) {
      alert(`title ${title} already exsists`);
      return;
    }

    setTasks((task) => [...tasks, { id, title, description, status: false }]);
  };

  return (
    <div>
      <Form addTask={addTask} />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
