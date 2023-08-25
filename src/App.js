import './App.css';
import Header from './../src/components/Header/Header';
import Navbar from './../src/components/Navbar/Navbar';
import Profile from './../src/components/Profile/Profile';
import Dialogs from './../src/components/Dialogs/Dialogs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Friends from './components/Friends/Friends';
import News from './components/News/News';
import Music from './components/Music/Music';

const App = (props) => {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile posts={props.posts} />} />
            <Route path="/dialogs/*" element={<Dialogs dialogs={props.dialogs}
              messages={props.messages} />} />
            <Route path="/friends" element={<Friends
              friendsList={props.friendsList} />} />
            <Route path="/news" element={<News
              newsFromApp={props.newsFromIndexJS} />} />
            <Route path="/music/*" element={<Music
              musicFromApp={props.musicFromIndexJS} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
