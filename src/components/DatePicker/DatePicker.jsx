import styles from "./DatePicker.module.css";
import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";
import Icon from "../Icon/Icon";

const Datepicker = ({ onChange, task, setTask, inputRef }) => {
  const clearDate = (e) => {
    e.preventDefault();
    inputRef.current.focus();
    setTask({ ...task, date: "" });
  };
  return (
    <label className={styles.CalendarWrapper}>
      <Icon icon="calendar" size={16} className={styles.CalendarIcon} />
      <label>
        <DatePicker
          selected={task.date ? new Date(task.date) : ""}
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
    </label>
  );
};

export default Datepicker;
