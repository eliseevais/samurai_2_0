import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postMessages = props.posts.map(post => <Post message={post.postText}
    likesCount={post.likesCount} key={post.id} />)

  return (
    <div className={styles.posts}>
      <h4>My posts</h4>
      <div className={styles.addPostField}>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      {postMessages}
    </div>
  )
}

export default MyPosts;