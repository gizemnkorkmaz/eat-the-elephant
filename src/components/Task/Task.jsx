import cx from "classnames";
import styles from "./Task.module.css";

import Icon from "../Icon/Icon";
import EditTask from "../EditTask/EditTask";

const Task = ({ task, tasks, setTasks, editTaskId, setEditTaskId }) => {
  const currentTaskId = task.id;

  const toggleIsDone = () => {
    setTasks(
      tasks.map((task) =>
        task.id === currentTaskId ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const activateEdit = () => {
    setEditTaskId(task.id);
  };

  const deleteTask = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (confirmDelete) {
      setTasks(tasks.filter((task) => task.id !== currentTaskId));
    }
  };

  return (
    <>
      {editTaskId === task.id ? (
        <EditTask
          task={task}
          tasks={tasks}
          setTasks={setTasks}
          editTaskId={editTaskId}
          setEditTaskId={setEditTaskId}
        />
      ) : (
        <div className={styles.TaskWrapper}>
          <div className={styles.TaskItem}>
            <Icon
              icon={task.isDone ? "checkbox-checked" : "checkbox-unchecked"}
              size={20}
              onClick={toggleIsDone}
            />
            <p
              className={cx(styles.TaskName, {
                [styles.TaskDone]: task.isDone,
              })}
            >
              {task.name}
            </p>
          </div>
          <div className={styles.Buttons}>
            <Icon icon="pencil" size={20} onClick={activateEdit} />
            <Icon icon="bin" size={20} onClick={deleteTask} />
          </div>
        </div>
      )}
    </>
  );
};
export default Task;
