import SearchInput from "../SearchInput/SearchInput";
import Icon from "../Icon/Icon";

import styles from "./Header.module.css";

const Header = ({ setSelectedList, setSearchedTask, toggleMenu }) => (
  <div className={styles.HeaderWrapper}>
    <nav className={styles.Navigation}>
      <div className={styles.MenuLogo}>
        <Icon icon="menu" size={24} onClick={toggleMenu} />
      </div>
      <SearchInput
        setSelectedList={setSelectedList}
        setSearchedTask={setSearchedTask}
      />
    </nav>
    <div className={styles.ElephantLogo}>
      <Icon icon="elephant" size={21} />
    </div>
  </div>
);

export default Header;
