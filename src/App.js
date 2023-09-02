import './App.css';
import Header from './../src/components/Header/Header';
import Navbar from './../src/components/Navbar/Navbar';
import Profile from './../src/components/Profile/Profile';
import Dialogs from './../src/components/Dialogs/Dialogs';
import { Routes, Route } from 'react-router-dom';
import Friends from './components/Friends/Friends';
import News from './components/News/News';
import Music from './components/Music/Music';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile" element={
            <Profile
              posts={props.posts}
              newPostText={props.newPostText}
              addPost={props.addPost}
              updateNewPostText={props.updateNewPostText}
            />} />
          <Route path="/dialogs/*" element={
            <Dialogs
              dialogs={props.dialogs}
              messages={props.messages} 
              newMesssageText={props.newMesssageText}
              sendMessage={props.sendMessage}
              updateNewMessageText={props.updateNewMessageText}
              />} />
          <Route path="/friends" element={<Friends
            friendsList={props.friendsList} />} />
          <Route path="/news" element={<News
            newsFromApp={props.newsFromIndexJS} />} />
          <Route path="/music/*" element={<Music
            musicFromApp={props.musicFromIndexJS} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
