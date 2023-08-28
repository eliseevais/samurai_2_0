import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css"
import { DialogsItem } from "./DialogsItem/DialogsItem";
import { Message } from "./Message/Message";
import React from "react";


const Dialogs = (props) => {

  let dialogsArray = props.dialogs.map(dialog => <DialogsItem name={dialog.name}
    id={dialog.id} key={dialog.id} />);

  let messagesArray = props.messages.map(message =>
    <Message message={message.message} key={message.id} />)

  let sendMessageButton = () => {
    let text = newMessageElement.current.value;
    alert(text)
  }

  let newMessageElement = React.createRef();

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItem}>
        {dialogsArray}
      </div>
      <div className={styles.dialogWrapper}>
        <div className={styles.messages}>
        {messagesArray}
      </div>
      <div className={styles.addNewMessage}>
      <textarea ref={newMessageElement}></textarea>
      <button onClick={sendMessageButton}>Send</button>
      </div>
      </div>
    </div>
  )
}

export default Dialogs;