import { addPostAC, updateNewPostAC } from "../../../redux/state";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {

  let newPostElement = React.createRef();

  let postMessages = props.posts.map(post => <Post message={post.postText}
    likesCount={post.likesCount} key={post.id} />);

  let addPost = () => {
    props.dispatch(addPostAC());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostAC(text));
  };

  return (
    <div className={styles.posts}>
      <h4>My posts</h4>
      <div className={styles.addPostField}>
        <textarea ref={newPostElement}
          onChange={onPostChange}
          value={props.newPostText} />
        <button onClick={addPost}>Add post</button>
      </div>
      {postMessages}
    </div>
  )
}

export default MyPosts;