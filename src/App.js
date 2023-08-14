import './App.css';
import Header from './../src/components/Header/Header';
import Navbar from './../src/components/Navbar/Navbar';
import Profile from './../src/components/Profile/Profile';

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
