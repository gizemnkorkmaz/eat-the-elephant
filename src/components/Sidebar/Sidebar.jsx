import cx from "classnames";

import TaskMenu from "../TaskMenu/TaskMenu";

import styles from "./Sidebar.module.css";

const Sidebar = ({
  isMenuHidden,
  taskLists,
  selectedList,
  setSelectedList,
}) => (
  <section
    className={cx(styles.TaskMenu, {
      [styles.ToggleTaskBoard]: isMenuHidden,
    })}
  >
    <TaskMenu
      taskLists={taskLists}
      selectedList={selectedList}
      setSelectedList={setSelectedList}
    />
  </section>
);

export default Sidebar;
