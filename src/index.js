import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { storeOOP } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={storeOOP._state}
          addPost={storeOOP.addPost.bind(storeOOP)}
          updateNewPostText={storeOOP.updateNewPostText.bind(storeOOP)}
          sendMessage={storeOOP.sendMessage.bind(storeOOP)}
          updateNewMessageText={storeOOP.updateNewMessageText.bind(storeOOP)}
          addNews={storeOOP.addNews.bind(storeOOP)}
          updateNewNewsText={storeOOP.updateNewNewsText.bind(storeOOP)}
        />
      </BrowserRouter>
    </React.StrictMode>
  )
}

rerenderEntireTree(storeOOP.getState());

storeOOP.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
