import styles from "./Header.module.css";

import SearchInput from "../SearchInput/SearchInput";
import Icon from "../Icon/Icon";

const Header = ({
  setSelectedList,
  setSearchedTask,
  isMenuHidden,
  setIsMenuHidden,
}) => {
  const toggleMenu = () => {
    setIsMenuHidden(!isMenuHidden);
  };

  const navigateHome = () => {
    setSelectedList("Inbox");
  };
  return (
    <div className={styles.HeaderWrapper}>
      <nav className={styles.Navigation}>
        <Icon icon="menu" size={23} onClick={toggleMenu} />
        <Icon icon="home" size={23} onClick={navigateHome} />
        <SearchInput
          setSelectedList={setSelectedList}
          setSearchedTask={setSearchedTask}
        />
      </nav>
      <div className={styles.Logo}>
        <Icon icon="elephant" size={20} />
      </div>
    </div>
  );
};

export default Header;
