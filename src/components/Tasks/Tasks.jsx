import {Task} from "../Task/Task";

const Tasks = (tasks) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>DESCRIPTION</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {tasks.tasks &&
            tasks.tasks.map((task) => (
             <Task key={task.id} task={task} tasks={tasks}/>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Tasks;
