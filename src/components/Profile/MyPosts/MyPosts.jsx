import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
    <div className={styles.posts}>
      <h4>My posts</h4>
      <div className={styles.addPostField}>
        <textarea></textarea>
      <button>Add post</button>
      </div>
      <Post message="Hello, friends!" likesCount="8" heart="&#9825;" />
      <Post message="How are you doing?" likesCount="9" heart="&#9829;" />
      <Post message="I am fine!" likesCount="4"  heart="&#9825;"/>

    </div>
  )
}

export default MyPosts;