import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";
import cx from "classnames";

import Icon from "../Icon/Icon";

import styles from "./DatePicker.module.css";

const Datepicker = ({
  onChange,
  task,
  setTask,
  inputRef,
  isOpen,
  setIsOpen,
}) => {
  const clearDate = (e) => {
    e.preventDefault();
    setTask({ ...task, date: "" });

    inputRef.current.focus();
    setIsOpen(false);
  };
  return (
    <label className={styles.CalendarWrapper}>
      <Icon
        icon="calendar"
        size={25}
        className={cx(styles.CalendarIcon, {
          [styles.DateSelected]: task.date,
        })}
        onClick={() => setIsOpen(true)}
      />
      <DatePicker
        selected={task.date ? new Date(task.date) : ""}
        onChange={onChange}
        className={styles.Calendar}
        minDate={new Date()}
        dateFormat="d MMM"
        open={isOpen}
      >
        <div className={styles.ClearDate} onClick={clearDate}>
          Clear Date
        </div>
      </DatePicker>
    </label>
  );
};

export default Datepicker;
