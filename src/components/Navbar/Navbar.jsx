import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
      <NavLink to="/profile" className={styles.item}>Profile</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/dialogs" className={styles.item}>Inbox</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/friends" className={styles.item}>Friends</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/news" className={styles.item}>News</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/music" className={styles.item}>Music</NavLink> 
      </div>
    </nav >
  )
}

export default Navbar;