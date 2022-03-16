import { useContext, useState } from "react";
import { TasksContext } from "../../context/tasksContext";

import styles from "./EditTask.module.css";

import Button from "../Button/Button";
import Icon from "../Icon/Icon";

const EditTask = ({ task }) => {
  const [editedTask, setEditedTask] = useState(task);
  const { tasks, setTasks, editTaskId, setEditTaskId } =
    useContext(TasksContext);

  const handleEdit = (e) => {
    setEditedTask({ ...task, name: e.target.value });
  };

  const saveEdit = () => {
    setEditTaskId(null);
    setTasks(tasks.map((task) => (task.id === editTaskId ? editedTask : task)));
  };

  const cancelEdit = () => {
    setEditTaskId(null);
  };

  return (
    <div className={styles.EditArea}>
      <div className={styles.EditTask}>
        <input
          type="text"
          value={editedTask.name}
          className={styles.Input}
          onChange={handleEdit}
        />
        <Icon icon="calendar" size={20} />
      </div>
      <div className={styles.Buttons}>
        <Button onClick={saveEdit}>Save</Button>
        <Button onClick={cancelEdit}>Cancel</Button>
      </div>
    </div>
  );
};

export default EditTask;
