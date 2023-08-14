import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={styles.posts}>
      <div>My posts</div>
      <div className={styles.addPostField}>
        <textarea></textarea>
      <button>Add post</button>
      </div>
      <Post />
      <Post />
      <Post />

    </div>
  )
}

export default MyPosts;