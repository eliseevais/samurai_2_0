import React from "react";
import styles from "./Dialogs.module.css"
import { NavLink } from "react-router-dom";
import { DialogsItem } from "./DialogsItem/DialogsItem";
import { Message } from "./Message/Message";


const Dialogs = (props) => {

  let dialogsArray = props.dialogs.map(dialog => <DialogsItem name={dialog.name}
    id={dialog.id} key={dialog.id} />);

  let messagesArray = props.messages.map(message =>
    <Message message={message.message} key={message.id} />);

  let sendMessage = () => {
    props.sendMessage();
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
    console.log(text);
  };

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
          <textarea ref={newMessageElement}
            onChange={onMessageChange}
            value={props.newMesssageText} />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;