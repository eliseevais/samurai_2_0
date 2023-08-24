import styles from "./DialogsItem.module.css";
import { NavLink } from "react-router-dom";


export const DialogsItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={styles.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}