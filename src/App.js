import { HashRouter, Routes, Route, HashRouter } from "react-router-dom";
import { Home, About, Login } from "./pages";
import Navbar from "./components/Navbar";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
