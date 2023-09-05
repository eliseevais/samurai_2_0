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
              posts={props.state.profilePage.postsData}
              newPostText={props.state.profilePage.newPostText}
              dispatch={props.dispatch}
              // addPost={props.addPost}
              // updateNewPostText={props.updateNewPostText}
            />} />
          <Route path="/dialogs/*" element={
            <Dialogs
              dialogs={props.state.dialogsPage.dialogsData}
              messages={props.state.dialogsPage.messagesData}
              newMesssageText={props.state.dialogsPage.newMesssageText}
              dispatch={props.dispatch}
              // sendMessage={props.sendMessage}
              // updateNewMessageText={props.updateNewMessageText}
            />} />
          <Route path="/friends" element={<Friends
            friendsList={props.state.friendsPage.friendsData} />} />
          <Route path="/news" element={
            <News
              newsFromApp={props.state.newsPage.newsData}
              newNewsDataElement={props.state.newsPage.newNewsDataElement}
              dispatch={props.dispatch}
              // addNews={props.addNews}
              // updateNewNewsText={props.updateNewNewsText}
            />} />
          <Route path="/music/*" element={<Music
            musicFromApp={props.state.musicPage.musicData} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
