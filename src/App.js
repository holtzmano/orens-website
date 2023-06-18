import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./components/HomePage";
import About from "./components/About";
import CV from "./components/CV";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
          <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/cv" element={<CV />}></Route>
              <Route path="/projects" element={<Projects />}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
