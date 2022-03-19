import { useContext, useState } from "react";
import { TasksContext } from "../../context/tasksContext";

import styles from "./EditTask.module.css";

import Button from "../Button/Button";
import Datepicker from "../DatePicker/DatePicker";

const EditTask = ({ task }) => {
  const [editedTask, setEditedTask] = useState(task);
  const { tasks, setTasks, editTaskId, setEditTaskId, taskDate, setTaskDate } =
    useContext(TasksContext);

  const handleEdit = (e) => {
    setEditedTask({ ...task, name: e.target.value });
  };

  const saveEdit = () => {
    const newTask = { ...editedTask, date: taskDate };

    setEditTaskId(null);
    setTasks(tasks.map((task) => (task.id === editTaskId ? newTask : task)));
    setTaskDate(new Date());
  };

  const cancelEdit = () => {
    setEditTaskId(null);
    setTaskDate(new Date());
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
        <Datepicker />
      </div>
      <div className={styles.Buttons}>
        <Button onClick={saveEdit}>Save</Button>
        <Button onClick={cancelEdit}>Cancel</Button>
      </div>
    </div>
  );
};

export default EditTask;