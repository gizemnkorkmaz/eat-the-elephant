import Icon from "../Icon/Icon";
import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.Footer}>
    <a
      href="https://github.com/gizemnkorkmaz/eat-the-elephant"
      target="_blank"
      rel="noreferrer"
      className={styles.Link}
    >
      <Icon icon="github" size={29} className={styles.SocialIcon} />
    </a>
    <a
      href="https://twitter.com/gizemnkorkmaz"
      target="_blank"
      rel="noreferrer"
      className={styles.Link}
    >
      <Icon icon="twitter" size={29} className={styles.SocialIcon} />
    </a>
  </footer>
);

export default Footer;
