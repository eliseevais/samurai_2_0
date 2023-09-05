import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
  
  let newPostElement = React.createRef();

  let postMessages = props.posts.map(post => <Post message={post.postText}
    likesCount={post.likesCount} key={post.id} />);

  let addPost = () => {
    let action = {type: 'ADD-POST'};
    props.dispatch(action);
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
    props.dispatch(action);
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