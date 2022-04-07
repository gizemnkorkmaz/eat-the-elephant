import styles from "./DatePicker.module.css";
import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";
import Icon from "../Icon/Icon";

const Datepicker = ({ selected, onChange }) => (
  <label className={styles.CalendarWrapper}>
    <Icon icon="calendar" size={16} className={styles.CalendarIcon} />
    <DatePicker
      selected={selected ? new Date(selected) : null}
      onChange={onChange}
      className={styles.Calendar}
      minDate={new Date()}
      dateFormat="d MMM"
    />
  </label>
);

export default Datepicker;
