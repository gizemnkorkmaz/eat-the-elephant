import cx from "classnames";
import styles from "./Task.module.css";

import Icon from "../Icon/Icon";

const Task = ({ task, toggleIsDone, deleteTask, editTask, handleEdit }) => (
  <div className={styles.TaskItem}>
    {task.editTask ? (
      <input
        type="text"
        className={styles.EditInput}
        value={task.name}
        onChange={(e) => handleEdit(e, task.id)}
      />
    ) : (
      <>
        <Icon
          icon={task.isDone ? "checkbox-checked" : "checkbox-unchecked"}
          size={20}
          className={styles.Icon}
          onClick={() => toggleIsDone(task.id)}
        />
        <p
          className={cx(styles.Task, {
            [styles.TaskDone]: task.isDone,
          })}
        >
          {task.name}
        </p>
        <Icon
          icon="bin"
          size={20}
          className={styles.Icon}
          onClick={() => deleteTask(task.id)}
        />
      </>
    )}
    <Icon
      icon={task.editTask ? "checkbox-checked" : "pencil"}
      size={18}
      className={styles.Icon}
      onClick={() => editTask(task.id)}
    />
  </div>
);

export default Task;
