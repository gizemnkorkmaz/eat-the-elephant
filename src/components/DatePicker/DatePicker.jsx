import styles from "./DatePicker.module.css";
import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";
import Icon from "../Icon/Icon";

const Datepicker = ({ onChange, task, setTask, inputRef }) => {
  const clearDate = (e) => {
    e.preventDefault();
    setTask({ ...task, date: "" });

    inputRef.current.focus();
  };
  return (
    <label className={styles.CalendarWrapper}>
      <Icon icon="calendar" size={16} className={styles.CalendarIcon} />
      <DatePicker
        selected={task.date ? new Date(task.date) : ""}
        onChange={onChange}
        className={styles.Calendar}
        minDate={new Date()}
        dateFormat="d MMM"
        closeOnScroll
      >
        <div className={styles.ClearDate} onClick={clearDate}>
          Clear Date
        </div>
      </DatePicker>
    </label>
  );
};

export default Datepicker;
