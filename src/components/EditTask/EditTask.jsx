import { useContext, useState } from "react";
import { TasksContext } from "../../context/tasksContext";

import styles from "./EditTask.module.css";

import Button from "../Button/Button";
import Datepicker from "../DatePicker/DatePicker";

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

  const changeDate = (date, e) => {
    e.preventDefault();
    setEditedTask({ ...editedTask, date: date.toString() });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      saveEdit();
    }
  };

  return (
    <div className={styles.EditArea}>
      <div className={styles.EditTask}>
        <input
          type="text"
          value={editedTask.name}
          className={styles.Input}
          onChange={handleEdit}
          onKeyDown={handleKeyDown}
          autoFocus
        />
        <Datepicker selected={editedTask.date} onChange={changeDate} />
      </div>
      <div className={styles.Buttons}>
        <Button onClick={saveEdit}>Save</Button>
        <Button onClick={cancelEdit}>Cancel</Button>
      </div>
    </div>
  );
};

export default EditTask;
