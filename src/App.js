import "./App.css";
import TodoWrapper from "./components/TodoWrapper/TodoWrapper.js";
import React, { useEffect, useState } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader.js";
import DotLoader from "react-spinners/DotLoader.js";
import Navbar from "./components/navbar/Navbar.js";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
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
          <Navbar className="navbar"></Navbar>
          <TodoWrapper className="TodoWrapper" />
        </>
      )}
    </div>
  );
}

export default App;
