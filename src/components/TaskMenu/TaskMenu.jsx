import styles from "./TaskMenu.module.css";
import cx from "classnames";

import Icon from "../Icon/Icon";

const TaskMenu = ({ selectTaskList, selectedList }) => {
  const taskLists = [
    { value: "inbox", label: "Inbox", icon: "drawer" },
    { value: "today", label: "Today", icon: "rocket" },
    { value: "tomorrow", label: "Tomorrow", icon: "pushpin" },
    { value: "nextSevenDays", label: "Next 7 Days", icon: "star" },
    { value: "upcoming", label: "Upcoming", icon: "hour-glass" },
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
          <Icon icon={icon} size={16} className={styles.Icon} />
          {label}
        </div>
      ))}
    </div>
  );
};

export default TaskMenu;
