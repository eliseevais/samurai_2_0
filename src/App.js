import './App.css';
import Header from './../src/components/Header/Header';
import Navbar from './../src/components/Navbar/Navbar';
import Profile from './../src/components/Profile/Profile';
import Dialogs from './../src/components/Dialogs/Dialogs';
import {  BrowserRouter, Routes, Route } from 'react-router-dom';
import Friends from './components/Friends/Friends';
import News from './components/News/News';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/dialogs' element={<Dialogs />} />
            <Route path='/friends' element={<Friends />} />
            <Route path='/news' element={<News />} />
          </Routes >
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
