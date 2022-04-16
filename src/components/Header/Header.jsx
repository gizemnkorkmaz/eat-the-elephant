import SearchInput from "../SearchInput/SearchInput";
import Icon from "../Icon/Icon";

import styles from "./Header.module.css";

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
        <div className={styles.MenuLogo}>
          <Icon icon="menu" size={23} onClick={toggleMenu} />
        </div>
        <div className={styles.HomeLogo}>
          <Icon icon="home" size={23} onClick={navigateHome} />
        </div>
        <SearchInput
          setSelectedList={setSelectedList}
          setSearchedTask={setSearchedTask}
        />
      </nav>
      <div className={styles.ElephantLogo}>
        <Icon icon="elephant" size={20} />
      </div>
    </div>
  );
};

export default Header;
