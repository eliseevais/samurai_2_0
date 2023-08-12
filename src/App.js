import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

const App = () => {
  return (
    <div>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Profile />
      </div>
    </div>
  );
}

export default App;
