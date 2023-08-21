import styles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <img className={styles.backPhoto} src='https://images.unsplash.com/photo-1591951086184-48aaaf065842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1342&q=80' />
      <div className={styles.descriptionWrapper}>
        <h4 className={styles.description}>
          About me
        </h4>
      </div>
    </div>
  )
}

export default ProfileInfo;