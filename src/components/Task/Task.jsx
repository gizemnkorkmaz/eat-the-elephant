import { useContext } from "react";
import { TasksContext } from "../../context/tasksContext";

import cx from "classnames";
import styles from "./Task.module.css";

import Icon from "../Icon/Icon";
import EditTask from "../EditTask/EditTask";

import dayjs from "dayjs";

const Task = ({ task }) => {
  const { tasks, setTasks, editTaskId, setEditTaskId } =
    useContext(TasksContext);
  const currentTaskId = task.id;
  const dueDate = dayjs(task.date).format("D MMM");
  const isOverdue = dayjs().isAfter(dayjs(task.date).add(1, "day"));

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
        <EditTask task={task} />
      ) : (
        <div className={styles.TaskWrapper}>
          <div className={styles.TaskItem}>
            <Icon
              icon={task.isDone ? "checkbox-checked" : "checkbox-unchecked"}
              size={17}
              onClick={toggleIsDone}
            />
            <p className={styles.TaskName}>
              <span
                className={cx({
                  [styles.TaskDone]: task.isDone,
                })}
              >
                {task.name}
              </span>
              <span
                className={cx(styles.TaskDue, {
                  [styles.OverdueTask]: isOverdue,
                })}
              >
                {dueDate}
              </span>
            </p>
          </div>
          <div className={styles.Buttons}>
            <Icon icon="pencil" size={18} onClick={activateEdit} />
            <Icon icon="bin" size={18} onClick={deleteTask} />
          </div>
        </div>
      )}
    </>
  );
};
export default Task;
