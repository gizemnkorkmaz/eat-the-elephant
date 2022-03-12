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

  const editTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, editTask: !task.editTask } : task
      )
    );
  };

  const handleEdit = (e, id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, name: e.target.value } : task
      )
    );
  };

  return (
    <div className={styles.Tasks}>
      <h1 className={styles.TasksHeader}>Today</h1>
      {tasks.map((task) => (
        <Task key={task.id}>
          <span className={task.isDone ? styles.TaskDone : ""}>
            {task.editTask ? (
              <input
                type="text"
                className={styles.EditInput}
                value={task.name}
                onChange={(e) => handleEdit(e, task.id)}
              />
            ) : (
              <div>
                <Icon
                  icon={task.isDone ? "checkbox-checked" : "checkbox-unchecked"}
                  size={20}
                  className={styles.Icon}
                  onClick={() => toggleIsDone(task.id)}
                />
                {task.name}
              </div>
            )}
          </span>
          <div>
            <Icon
              icon="bin"
              size={20}
              className={styles.Icon}
              onClick={() => deleteTask(task.id)}
            />
            <Icon
              icon={task.editTask ? "checkbox-checked" : "pencil"}
              size={18}
              className={styles.Icon}
              onClick={() => editTask(task.id)}
            />
          </div>
        </Task>
      ))}
    </div>
  );
};
export default Tasks;
