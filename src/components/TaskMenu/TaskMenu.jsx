import styles from "./TaskMenu.module.css";
import cx from "classnames";

import { useContext } from "react";
import { TasksContext } from "../../context/tasksContext";
import sortTasks from "../../utils/sortTasks";

import Icon from "../Icon/Icon";
import SearchInput from "../SearchInput/SearchInput";

const TaskMenu = ({ setSelectedList, selectTaskList, selectedList }) => {
  const { tasks } = useContext(TasksContext);

  const taskLists = [
    { value: "inbox", label: "Inbox", icon: "drawer" },
    { value: "overdue", label: "Overdue", icon: "history" },
    { value: "important", label: "Important", icon: "flag" },
    { value: "today", label: "Today", icon: "rocket" },
    { value: "tomorrow", label: "Tomorrow", icon: "pushpin" },
    { value: "nextSevenDays", label: "Next 7 Days", icon: "star" },
    { value: "upcoming", label: "Upcoming", icon: "hour-glass" },
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
            <Icon icon={icon} size={16} className={styles.Icon} />
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
      <SearchInput setSelectedList={setSelectedList} />
    </div>
  );
};

export default TaskMenu;
