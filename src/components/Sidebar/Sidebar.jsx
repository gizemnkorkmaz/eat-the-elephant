import cx from "classnames";

import TaskMenu from "../TaskMenu/TaskMenu";

import styles from "./Sidebar.module.css";

const Sidebar = ({
  isSidebarHidden,
  taskLists,
  selectedList,
  setSelectedList,
}) => (
  <section
    className={cx(styles.Sidebar, {
      [styles.SidebarHidden]: isSidebarHidden,
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
