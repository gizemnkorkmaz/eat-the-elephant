import styles from "./DatePicker.module.css";
import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";
import Icon from "../Icon/Icon";

const Datepicker = ({ selected, onChange }) => (
  <label className={styles.CalendarWrapper}>
    <DatePicker
      selected={selected ? new Date(selected) : new Date()}
      onChange={onChange}
      className={styles.Calendar}
      minDate={new Date()}
      dateFormat="d MMMM"
    />
    <Icon icon="calendar" size={18} className={styles.CalendarIcon} />
  </label>
);

export default Datepicker;
