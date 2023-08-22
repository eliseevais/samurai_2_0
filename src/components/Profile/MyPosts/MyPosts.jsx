import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postsData = [
    { id: 1, postText: "Hello, friends!", likesCount: 8 },
    { id: 2, postText: "How are you doing?", likesCount: 9 },
    { id: 3, postText: "I am fine!", likesCount: 4 },
  ]

  return (
    <div className={styles.posts}>
      <h4>My posts</h4>
      <div className={styles.addPostField}>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <Post message={postsData[0].postText} likesCount={postsData[0].likesCount} />
      <Post message={postsData[1].postText} likesCount={postsData[1].likesCount} />
      <Post message={postsData[2].postText} likesCount={postsData[2].likesCount} />

    </div>
  )
}

export default MyPosts;