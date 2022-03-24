import styles from "./TaskMenu.module.css";
import cx from "classnames";

import Icon from "../Icon/Icon";

const TaskMenu = ({ selectTaskList, selectedList }) => {
  const taskLists = [
    { value: "today", label: "Today", icon: "star-empty" },
    { value: "tomorrow", label: "Tomorrow", icon: "pushpin" },
    { value: "nextSevenDays", label: "Next 7 Days", icon: "hour-glass" },
    { value: "allTasks", label: "All Tasks", icon: "rocket" },
  ];

  return (
    <div className={styles.TaskMenu}>
      {taskLists.map(({ value, label, icon }) => (
        <div
          className={cx(styles.TaskList, {
            [styles.Active]: selectedList === label,
          })}
          key={value}
          onClick={() => selectTaskList(value)}
        >
          <Icon icon={icon} size={15} />
          {label}
        </div>
      ))}
    </div>
  );
};

export default TaskMenu;
