import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postsData = [
    { id: 1, postText: "Hello, friends!", likesCount: 8 },
    { id: 2, postText: "How are you doing?", likesCount: 9 },
    { id: 3, postText: "I am fine!", likesCount: 4 },
  ];

  let postMessages = postsData.map(post => <Post message={post.postText}
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