import styles from "./Tasks.module.css";

import Task from "../Task/Task";

const Tasks = ({ tasks, setTasks, editTaskId, setEditTaskId }) => {
  return (
    <div className={styles.Tasks}>
      <h1 className={styles.TasksHeader}>Today</h1>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          tasks={tasks}
          setTasks={setTasks}
          editTaskId={editTaskId}
          setEditTaskId={setEditTaskId}
        />
      ))}
    </div>
  );
};
export default Tasks;
