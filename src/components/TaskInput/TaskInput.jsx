import styles from "./TaskInput.module.css";

import Button from "../Button/Button";
import Icon from "../Icon/Icon";

const TaskInput = ({ task, setTask }) => (
  <div className={styles.InputArea}>
    <input
      type="text"
      className={styles.TaskInput}
      placeholder="Enter your task"
      value={task}
      onChange={(e) => setTask(e.target.value)}
    />
    <Button onClick={() => setTask("")}>
      <Icon icon="plus" size={20} />
    </Button>
  </div>
);

export default TaskInput;
