import styles from "./Tasks.module.css";

import Task from "../Task/Task";
import Icon from "../Icon/Icon";

const Tasks = ({ tasks, setTasks }) => {
  const toggleIsDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className={styles.Tasks}>
      <h1 className={styles.TasksHeader}>Today</h1>
      {tasks.map((task) => (
        <Task key={task.id} task={task}>
          <div onClick={() => toggleIsDone(task.id)}>
            <Icon
              icon={task.isDone ? "checkbox-checked" : "checkbox-unchecked"}
              size={20}
              className={styles.Icon}
            />
            <span className={task.isDone ? styles.TaskDone : ""}>
              {task.name}
            </span>
          </div>
          <div>
            <Icon
              icon="bin"
              size={20}
              className={styles.Icon}
              onClick={() => deleteTask(task.id)}
            />
          </div>
        </Task>
      ))}
    </div>
  );
};
export default Tasks;
