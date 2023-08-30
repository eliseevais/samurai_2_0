import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost } from './redux/state'
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (store) => {

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
          addPost={addPost}
        />
      </BrowserRouter>
    </React.StrictMode>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
