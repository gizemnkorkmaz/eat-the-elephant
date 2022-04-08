import styles from "./DatePicker.module.css";
import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";
import Icon from "../Icon/Icon";

const Datepicker = ({ onChange, task, setTask }) => {
  const clearDate = () => {
    setTask({ ...task, date: "" });
  };
  return (
    <label className={styles.CalendarWrapper}>
      <Icon icon="calendar" size={16} className={styles.CalendarIcon} />
      <DatePicker
        selected={task.date ? new Date(task.date) : undefined}
        onChange={onChange}
        className={styles.Calendar}
        minDate={new Date()}
        dateFormat="d MMM"
      >
        <div className={styles.ClearDate} onClick={clearDate}>
          Clear Date
        </div>
      </DatePicker>
    </label>
  );
};

export default Datepicker;
