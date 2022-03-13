import cx from "classnames";
import styles from "./Task.module.css";

import Icon from "../Icon/Icon";
import EditTask from "../EditTask/EditTask";

const Task = ({ task, tasks, setTasks }) => {
  const toggleIsDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const activateEdit = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isEditActive: true } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className={styles.TaskItem}>
      {task.isEditActive ? (
        <EditTask task={task} tasks={tasks} setTasks={setTasks} />
      ) : (
        <>
          <Icon
            icon={task.isDone ? "checkbox-checked" : "checkbox-unchecked"}
            size={20}
            onClick={() => toggleIsDone(task.id)}
          />
          <p
            className={cx(styles.Task, {
              [styles.TaskDone]: task.isDone,
            })}
          >
            {task.name}
          </p>
          <Icon icon="pencil" size={20} onClick={() => activateEdit(task.id)} />
          <Icon icon="bin" size={20} onClick={() => deleteTask(task.id)} />
        </>
      )}
    </div>
  );
};
export default Task;
