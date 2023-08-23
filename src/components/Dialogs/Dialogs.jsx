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
    <div className={styles.message}>{props.message}</div>
  )
}

const Dialogs = (props) => {

  let dialogsData = [
    { id: 1, name: "Sofa" },
    { id: 2, name: "Nikolay" },
    { id: 3, name: "Maria" },
    { id: 4, name: "Denis" },
    { id: 5, name: "Mark" },
  ];

  let messagesData = [
    { id: 1, message: "Hello!" },
    { id: 2, message: "How are you doing?" },
    { id: 3, message: "I am fine, thank you. And you?" },
  ];

  let dialogsArray = dialogsData.map(dialog => <DialogsItem name={dialog.name}
    id={dialog.id} key={dialog.id} />);

  let messagesArray = messagesData.map(message =>
    <Message message={message.message} key={message.id} />)

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItem}>
        {dialogsArray}
      </div>
      <div className={styles.messages}>
        {messagesArray}
      </div>
    </div>
  )
}

export default Dialogs;