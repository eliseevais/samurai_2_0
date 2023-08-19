import styles from "./Dialogs.module.css"

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItem}>
        <div className={styles.dialog}>Sofa</div>
        <div className={styles.dialog + ' ' + styles.active}>Nikolay</div>
        <div className={styles.dialog}>Maria</div>
        <div className={styles.dialog}>Denis</div>
        <div className={styles.dialog}>Mark</div>
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