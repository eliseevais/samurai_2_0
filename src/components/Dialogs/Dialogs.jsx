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
  ]

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItem}>
        <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogsItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogsItem name={dialogsData[4].name} id={dialogsData[4].id} />
      </div>
      <div className={styles.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />

      </div>
    </div>
  )
}

export default Dialogs;