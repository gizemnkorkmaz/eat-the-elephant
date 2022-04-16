import IcoMoon from "react-icomoon";

import styles from "./Icon.module.css";

const iconSet = require("./selection.json");

const Icon = (props) => (
  <IcoMoon iconSet={iconSet} className={styles.Icon} {...props} />
);

export default Icon;
