import './App.css';
import Contact from './Contact';
import Home from './Home';
import About from './About';
import EngineeringTopics from './EngineeringTopics';

function App() {
  let currentYear = new Date().getFullYear()
  let isLoggedIn = true
  let message = isLoggedIn ? "Welcome Back!" : "Please Log In"
  const about = "We are passionate about delivering quality experiences."
  const home = "Welcome to our website."
  const contact = "Feel free to reach out to us via email or phone."

  return (
    <div>
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>{currentYear}</p>
      <p>{message}</p>
      <Home descr={home} />
      <About descr={about} />
      <Contact descr={contact} />
      <EngineeringTopics />
    </div>

  );
}

export default App;

