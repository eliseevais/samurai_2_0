import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <a href="/profile" className={`${styles.item} ${styles.active}`}>Profile</a>
      <a href="/dialogs" className={styles.item}>Inbox</a>
      <a href="/friends" className={styles.item}>Friends</a>
      <a href="/news" className={styles.item}>News</a>
    </nav>
  )
}

export default Navbar;