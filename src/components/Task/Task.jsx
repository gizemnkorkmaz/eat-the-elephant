import styles from "./Task.module.css";

const Task = ({ children, ...props }) => (
  <div className={styles.TaskItem} {...props}>
    {children}
  </div>
);

export default Task;
