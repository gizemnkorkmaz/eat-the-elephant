import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";
import cx from "classnames";

import Icon from "../Icon/Icon";

import styles from "./DatePicker.module.css";
import "./react-datepicker-custom.css";

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
        size={35}
        className={cx(styles.CalendarIcon, {
          [styles.DateSelected]: task.date,
        })}
        onClick={() => setIsOpen(true)}
      />
      <DatePicker
        selected={task.date ? new Date(task.date) : ""}
        className={styles.Calendar}
        minDate={new Date()}
        dateFormat="d MMM"
        onChange={onChange}
        readOnly={true}
        open={isOpen}
        onClickOutside={() => setIsOpen(false)}
      >
        <div className={styles.ClearDate} onClick={clearDate}>
          Clear Date
        </div>
      </DatePicker>
    </label>
  );
};

export default Datepicker;
