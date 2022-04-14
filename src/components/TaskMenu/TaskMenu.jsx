import styles from "./TaskMenu.module.css";
import cx from "classnames";

import { useContext } from "react";
import { TasksContext } from "../../context/tasksContext";
import sortTasks from "../../utils/sortTasks";

import Icon from "../Icon/Icon";

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
        sortTasks(label, tasks).length || label === "Inbox" ? (
          <div
            className={cx(styles.TaskList, {
              [styles.Active]: selectedList === label,
            })}
            key={value}
            onClick={() => selectTaskList(value)}
          >
            <Icon icon={icon} size={18} className={styles.Icon} />
            {label}
            <span
              className={cx(styles.TaskLength, {
                [styles.Overdue]: label === "Overdue",
                [styles.Important]: label === "Important",
              })}
            >
              ({sortTasks(label, tasks).filter((task) => !task.isDone).length})
            </span>
          </div>
        ) : null
      )}
    </div>
  );
};

export default TaskMenu;
