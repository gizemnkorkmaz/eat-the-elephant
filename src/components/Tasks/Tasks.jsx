import styles from "./Tasks.module.css";
import Task from "../Task/Task";

const Tasks = ({ tasks, setTasks }) => {
  const toggleIsDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  return (
    <div className={styles.Tasks}>
      <h1 className={styles.TasksHeader}>Today</h1>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onClick={() => toggleIsDone(task.id)} />
      ))}
    </div>
  );
};
export default Tasks;
