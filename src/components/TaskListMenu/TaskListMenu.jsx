import { useContext } from "react";
import cx from "classnames";

import Icon from "../Icon/Icon";
import { TasksContext } from "../../context/tasksContext";

import styles from "./TaskListMenu.module.css";

const TaskListMenu = ({ taskLists, selectedList, setSelectedList }) => {
  const { tasks, getTaskGroup } = useContext(TasksContext);

  const taskGroup = getTaskGroup(tasks);

  const totalTaskCount = (value) => taskGroup[value]?.length;

  const completedTaskCount = (value) =>
    taskGroup[value]?.filter((task) => task.isDone).length;

  const listsToShown = Object.values(taskLists).filter(
    (list) =>
      (totalTaskCount(list.value) && list.value !== "noDate") ||
      list.value === "inbox"
  );

  return (
    <nav className={styles.TaskListsMenu}>
      {listsToShown.map(({ value, label, icon }) => (
        <div
          className={cx(styles.TaskList, {
            [styles.Selected]: selectedList === value,
          })}
          key={value}
          onClick={() => setSelectedList(value)}
        >
          <Icon icon={icon} className={styles.Icon} />
          <span className={styles.TaskLabel}>{label}</span>
          <span
            className={cx(styles.TaskCompletion, {
              [styles.Overdue]: value === "overdue",
              [styles.Important]: value === "important",
            })}
          >
            ({completedTaskCount(value)}/{totalTaskCount(value)})
          </span>
        </div>
      ))}
    </nav>
  );
};

export default TaskListMenu;
