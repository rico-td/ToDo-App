import "./App.css";
import TodoWrapper from "./components/TodoWrapper/TodoWrapper.js";
import React, { useEffect, useState } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader.js";
import Navbar from "./components/navbar/Navbar.js";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <>
          <ClimbingBoxLoader
            className="loadingIcon"
            color="#0B0625"
            size={20}
          />
        </>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
          </Routes>

          <Navbar className="navbar"></Navbar>
          <TodoWrapper className="TodoWrapper" />
        </>
      )}
    </div>
  );
}

export default App;
