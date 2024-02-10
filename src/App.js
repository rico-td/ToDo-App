// -------------- STYLE -----------------
import "./App.css";
import "./index.css";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader.js";

// -------------- LOGIC -----------------
import { Routes, Route, Link } from "react-router-dom";
import { Home, Login, About, Contact } from "./pages";
import Navbar from "./components/Navbar";

// -------------- ELEMENTS -----------------

function App() {
  return (
    <div className="App">
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
      </ul> */}

      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>

        <Route path="*" />
      </Routes>
    </div>
  );
}

export default App;
