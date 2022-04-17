import { useContext } from "react";
import dayjs from "dayjs";
import cx from "classnames";

import Icon from "../Icon/Icon";
import EditTask from "../EditTask/EditTask";
import { TasksContext } from "../../context/tasksContext";

import styles from "./Task.module.css";

const Task = ({ task }) => {
  const { tasks, setTasks, editTaskId, setEditTaskId } =
    useContext(TasksContext);
  const currentTaskId = task.id;
  const dueDate = dayjs(task.date).format("D MMM");
  const isOverdue = dayjs().isAfter(dayjs(task.date).add(1, "day"));

  const toggleIsDone = () => {
    const newTasks = tasks.map((task) =>
      task.id === currentTaskId ? { ...task, isDone: !task.isDone } : task
    );

    setTasks(newTasks);
  };

  const activateEdit = () => {
    setEditTaskId(task.id);
  };

  const toggleTaskImportance = () => {
    const newTasks = tasks.map((task) =>
      task.id === currentTaskId
        ? { ...task, isImportant: !task.isImportant }
        : task
    );

    setTasks(newTasks);
  };

  const deleteTask = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (confirmDelete) {
      const newTasks = tasks.filter((task) => task.id !== currentTaskId);
      setTasks(newTasks);
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
              icon={task.isDone ? "check" : "empty-check"}
              className={cx(styles.Checkbox, {
                [styles.CheckboxEmphasis]: task.isImportant && !task.isDone,
              })}
              onClick={toggleIsDone}
            />
            <div className={styles.TaskName}>
              <span
                className={cx({
                  [styles.TaskDone]: task.isDone,
                })}
              >
                {task.name}
              </span>
            </div>
          </div>
          <div className={styles.TaskActions}>
            <div
              className={cx(styles.TaskDue, {
                [styles.OverdueTask]: isOverdue,
              })}
            >
              {task.date ? dueDate : ""}
            </div>
            <div
              className={cx(styles.Buttons, {
                [styles.ImportantActive]: task.isImportant,
              })}
            >
              <Icon
                icon="important"
                size={24}
                className={cx(styles.ImportantTaskEmpty, {
                  [styles.ImportantTask]: task.isImportant,
                })}
                onClick={toggleTaskImportance}
              />
              <Icon
                icon="edit"
                size={24}
                className={styles.EditButton}
                onClick={activateEdit}
              />
              <Icon
                icon="delete"
                size={24}
                className={styles.DeleteButton}
                onClick={deleteTask}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Task;
