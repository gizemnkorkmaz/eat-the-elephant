import styles from "./TaskInput.module.css";

import Button from "../Button/Button";
import Icon from "../Icon/Icon";

const TaskInput = ({ task, setTask, tasks, setTasks }) => {
  const addTask = (task) => {
    if (task) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask(task);
    }
  };

  return (
    <div className={styles.InputArea}>
      <input
        type="text"
        className={styles.TaskInput}
        placeholder="Enter your task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button onClick={() => addTask(task)}>
        <Icon icon="plus" size={20} />
      </Button>
    </div>
  );
};
export default TaskInput;
