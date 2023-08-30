import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {

  let postMessages = props.posts.map(post => <Post message={post.postText}
    likesCount={post.likesCount} key={post.id} />)

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    console.log(newPostElement);
    newPostElement.current.value = '';
  }

  let newPostElement = React.createRef();

  return (
    <div className={styles.posts}>
      <h4>My posts</h4>
      <div className={styles.addPostField}>
        <textarea ref={newPostElement}></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
      {postMessages}
    </div>
  )
}

export default MyPosts;