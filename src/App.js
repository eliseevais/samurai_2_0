import './App.css';

const App = () => {
  return (
    <div>
      <div className="app-wrapper">
        <header className="header">
          <img src="https://s3-eu-west-1.amazonaws.com/tpd/logos/5be01d787b5e5b0001ebb6bb/0x0.png" />
        </header>
        <nav className="nav">
          <div>Profile</div>
          <div>News</div>
          <div>Inbox</div>
          <div>Friends</div>
        </nav>
        <div className="content">
          <img src='https://images.unsplash.com/photo-1591951086184-48aaaf065842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1342&q=80' />
          <div className="description">Here will be information about me</div>
          <div className="posts">
            My posts
            <div>Post 1</div>
            <div>Post 2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
