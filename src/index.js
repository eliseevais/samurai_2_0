import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { addPost, updateNewPostText, store, subscribe } from './redux/state'

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (store) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          dialogs={store.dialogsPage.dialogsData}
          messages={store.dialogsPage.messagesData}
          posts={store.profilePage.postsData}
          friendsList={store.friendsPage.friendsData}
          newsFromIndexJS={store.newsPage.newsData}
          musicFromIndexJS={store.musicPage.musicData}
          newPostText={store.profilePage.newPostText}
          addPost={addPost}
          updateNewPostText={updateNewPostText}
        />
      </BrowserRouter>
    </React.StrictMode>
  )
}

rerenderEntireTree(store);

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
