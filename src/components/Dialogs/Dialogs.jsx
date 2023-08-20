import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css"

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItem}>
        <div className={styles.dialog}>
          <NavLink to="/dialogs/1">Sofa</NavLink>
        </div>
        <div className={`${styles.dialog} ${styles.active}`}>
          <NavLink to="/dialogs/2">Nikolay</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to="/dialogs/3">Maria</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to="/dialogs/4">Denis</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to="/dialogs/5">Mark</NavLink>
        </div>
      </div>
      <div className={styles.messages}>
        <div className={styles.message}>Hello!</div>
        <div className={styles.message}>How are you doing?</div>
        <div className={styles.message}>I am fine</div>
      </div>

    </div>
  )
}

export default Dialogs;