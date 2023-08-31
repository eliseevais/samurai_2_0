import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

  return (
    <div className={styles.content}>
      <ProfileInfo />
      <MyPosts posts={props.posts} 
        newPostText={props.newPostText} 
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
        />
    </div>
  )
}

export default Profile;