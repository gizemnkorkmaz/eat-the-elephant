import styles from "./Task.module.css";
import Icon from "../Icon/Icon";

const Task = ({ task, ...props }) => (
  <div className={styles.TaskItem} {...props}>
    <Icon
      icon={task.isDone ? "checkbox-checked" : "radio-unchecked"}
      size={15}
      className={styles.Icon}
    />
    {task.name}
  </div>
);

export default Task;
