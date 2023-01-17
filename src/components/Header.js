import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <a href='#' className={styles.logo}>
        <img src='../../public/logo.png' alt='logo' />
      </a>
      <ul className={styles.navlinks}>
        <li className={styles.navitem}>
          <a href='#'>Home</a>
        </li>
        <li className={styles.navitem}>
          <a href='#'>Resumes Services</a>
        </li>
        <li className={styles.navitem}>
          <a href='#'>Events & Meetups</a>
        </li>
        <li className={styles.navitem}>
          <a href='#'>Login</a>
        </li>
        <li className={styles.navitem}>
          <a href='#'>Sign Up</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
