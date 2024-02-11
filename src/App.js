import { HashRouter, Routes, Route } from "react-router-dom";
import { Home, About, Login } from "./pages";
import Navbar from "./components/Navbar";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="https://rico-td.github.io/ToDo-App/" element={<Home />} />
        <Route
          path="https://rico-td.github.io/ToDo-App/Login"
          element={<Login />}
        />
        <Route
          path="https://rico-td.github.io/ToDo-App/About"
          element={<About />}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
