import { HashRouter, Routes, Route } from "react-router-dom";
import { Home, Login, UseState } from "./pages";
import Navbar from "./components/Navbar";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/UseState" element={<UseState />} />
        <Route path="*" />
      </Routes>
    </HashRouter>
  );
}

export default App;
