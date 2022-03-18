import styles from "./DatePicker.module.css";
import "react-datepicker/dist/react-datepicker.css";

import { useContext } from "react";
import { TasksContext } from "../../context/tasksContext";

import DatePicker from "react-datepicker";
import Icon from "../Icon/Icon";

const Datepicker = () => {
  const { taskDate, setTaskDate } = useContext(TasksContext);

  return (
    <label className={styles.CalendarWrapper}>
      <DatePicker
        selected={taskDate}
        onChange={(e) => setTaskDate(e)}
        className={styles.Calendar}
        minDate={new Date()}
        dateFormat="MMMM d"
      />
      <Icon icon="calendar" size={18} className={styles.CalendarIcon} />
    </label>
  );
};

export default Datepicker;
