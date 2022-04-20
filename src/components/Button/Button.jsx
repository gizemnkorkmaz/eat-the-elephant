import cx from "classnames";
import styles from "./Button.module.css";

const Button = ({ children, className, ...props }) => (
  <button className={cx(styles.Button, className)} {...props}>
    {children}
  </button>
);

export default Button;
