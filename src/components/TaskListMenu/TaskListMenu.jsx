import { useContext } from "react";
import cx from "classnames";

import Icon from "../Icon/Icon";
import { TasksContext } from "../../context/tasksContext";
import sortTasks from "../../utils/sortTasks";

import styles from "./TaskListMenu.module.css";

const TaskListMenu = ({ taskLists, selectedList, setSelectedList }) => {
  const { tasks } = useContext(TasksContext);

  const menuList = Object.values(taskLists).filter(
    (list) => list.value !== "noDate"
  );

  return (
    <nav className={styles.TaskMenu}>
      {menuList.map(({ value, label, icon }) =>
        sortTasks(value, tasks).length || value === "inbox" ? (
          <div
            className={cx(styles.TaskList, {
              [styles.Active]: selectedList === value,
            })}
            key={value}
            onClick={() => setSelectedList(value)}
          >
            <Icon icon={icon} className={styles.Icon} />
            <span className={styles.TaskLabel}>{label}</span>
            <span
              className={cx(styles.TaskCount, {
                [styles.Overdue]: value === "overdue",
                [styles.Important]: value === "important",
              })}
            >
              ({sortTasks(value, tasks).filter((task) => !task.isDone).length})
            </span>
          </div>
        ) : null
      )}
    </nav>
  );
};

export default TaskListMenu;
