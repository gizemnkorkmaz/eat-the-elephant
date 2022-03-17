import { useContext } from "react";
import { TasksContext } from "../../context/tasksContext";

import styles from "./Tasks.module.css";

import Task from "../Task/Task";

const Tasks = () => {
  const { tasks } = useContext(TasksContext);

  localStorage.setItem("tasks", JSON.stringify(tasks));
  return (
    <div className={styles.Tasks}>
      <h1 className={styles.TasksHeader}>Today</h1>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};
export default Tasks;
