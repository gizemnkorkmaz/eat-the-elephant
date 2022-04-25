import SearchInput from "../SearchInput/SearchInput";
import Icon from "../Icon/Icon";

import styles from "./Header.module.css";

const Header = ({ setSelectedList, setSearchedTask, toggleSidebar }) => (
  <header className={styles.Header}>
    <div className={styles.Menu}>
      <div className={styles.MenuIcon}>
        <Icon icon="menu" size={24} onClick={toggleSidebar} />
      </div>
      <SearchInput
        setSelectedList={setSelectedList}
        setSearchedTask={setSearchedTask}
      />
    </div>
    <div className={styles.ElephantLogo}>
      <Icon icon="elephant" size={21} />
    </div>
  </header>
);

export default Header;
