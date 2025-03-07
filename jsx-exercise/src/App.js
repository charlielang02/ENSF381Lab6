import './App.css';

function App() {
  let currentYear = new Date().getFullYear()
  let isLoggedIn = true
  let message = isLoggedIn ? "Welcome Back!" : "Please Log In"
  return (
    <div>
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>{currentYear}</p>
      <p>{message}</p>
    </div>

  );
}

export default App;
