import { useContext } from "react";
import cx from "classnames";

import Icon from "../Icon/Icon";
import { TasksContext } from "../../context/tasksContext";
import sortTasks from "../../utils/sortTasks";

import styles from "./TaskMenu.module.css";

const TaskMenu = ({ selectTaskList, selectedList }) => {
  const { tasks } = useContext(TasksContext);

  const taskLists = [
    { value: "inbox", label: "Inbox", icon: "inbox" },
    { value: "important", label: "Important", icon: "important" },
    { value: "overdue", label: "Overdue", icon: "history" },
    { value: "today", label: "Today", icon: "today" },
    { value: "tomorrow", label: "Tomorrow", icon: "pushpin" },
    { value: "nextSevenDays", label: "Next 7 Days", icon: "star" },
    { value: "upcoming", label: "Upcoming", icon: "hourglass" },
  ];

  return (
    <div className={styles.TaskMenu}>
      {taskLists.map(({ value, label, icon }) =>
        sortTasks(value, tasks).length || value === "inbox" ? (
          <div
            className={cx(styles.TaskList, {
              [styles.Active]: selectedList === value,
            })}
            key={value}
            onClick={() => selectTaskList(value)}
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
    </div>
  );
};

export default TaskMenu;
