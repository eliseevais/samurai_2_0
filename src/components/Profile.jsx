import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.content}>
          <img src='https://images.unsplash.com/photo-1591951086184-48aaaf065842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1342&q=80' />
          <div className={styles.description}>Here will be information about me</div>
          <div className={styles.posts}>
            My posts
            <div className={`${styles.item} ${styles.active}`}>Post 1</div>
            <div className={styles.item}>Post 2</div>
          </div>
        </div>
  )
}

export default Profile;