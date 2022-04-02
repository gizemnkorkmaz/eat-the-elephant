import styles from "./EmptyTaskList.module.css";

import { useContext } from "react";
import { TasksContext } from "../../context/tasksContext";

import Button from "../Button/Button";

const EmptyTaskList = () => {
  const { tasks, setTasks } = useContext(TasksContext);
  const incompleteTasks = tasks.filter((task) => !task.isDone);

  const clearAll = () => {
    const isConfirm = window.confirm(
      "Are you sure you want to clear all tasks?"
    );
    if (isConfirm) {
      setTasks([]);
    }
  };
  return (
    !incompleteTasks.length && (
      <div className={styles.EmptyTaskWrapper}>
        {tasks.length === 0 ? (
          <h2>No task listed.</h2>
        ) : (
          incompleteTasks.length === 0 && (
            <div>
              <p className={styles.EmptyTaskMessage}>
                Looks like everything's organized in the right place!
              </p>
              <Button onClick={clearAll}>Clear All</Button>
            </div>
          )
        )}
      </div>
    )
  );
};

export default EmptyTaskList;
