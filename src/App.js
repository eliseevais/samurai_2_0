import './App.css';

const App = () => {
  return (
    <div>
      <div className="greeting">
        THE GREETING
      </div>
      <Menu />
      <Posts />
    </div>
  );
}

const Menu = () => {
  return (
    <div>
      <a href="#">About </a>
      <a href="#">News </a>
      <a href="#">Melodies </a>
    </div>
  )
}

const Posts = () => {
  return (
    <div>
      <div>post Katya</div>
      <div>post Irina</div>
      <div>post Masha</div>
    </div>
  )
}

export default App;
