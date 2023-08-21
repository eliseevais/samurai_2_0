import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css"

const DialogsItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={styles.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={styles.message}>{props.message}!</div>
  )
}

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItem}>
        <DialogsItem name="Sofa" id="1" />
        <DialogsItem name="Nikolay" id="2" />
        <DialogsItem name="Maria" id="3" />
        <DialogsItem name="Denis" id="4" />
        <DialogsItem name="Mark" id="5" />
      </div>
      <div className={styles.messages}>
        <Message message="Hello"/> 
        <Message message="How are you doing?"/> 
        <Message message="I am fine, thank you. And you?"/> 
      </div>
    </div>
  )
}

export default Dialogs;