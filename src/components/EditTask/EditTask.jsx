import { useState } from "react";

import styles from "./EditTask.module.css";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";

const EditTask = ({ task, tasks, setTasks }) => {
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = (e) => {
    setEditedTask({ ...task, name: e.target.value });
  };

  const saveEdit = (e, id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? e.target.innerText === "Save"
            ? { ...editedTask, isEditActive: false }
            : { ...task, isEditActive: false }
          : task
      )
    );
  };

  return (
    <div className={styles.EditArea}>
      <div className={styles.EditTask}>
        <input
          type="text"
          value={editedTask.name}
          className={styles.Input}
          onChange={(e) => handleEdit(e, task.id)}
        />
        <Icon icon="calendar" size={20} />
      </div>
      <div className={styles.Buttons}>
        <Button onClick={(e) => saveEdit(e, task.id)}>Save</Button>
        <Button onClick={(e) => saveEdit(e, task.id)}>Cancel</Button>
      </div>
    </div>
  );
};

export default EditTask;
