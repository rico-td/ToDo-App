import "./App.css";
import TodoWrapper from "./components/TodoWrapper/TodoWrapper.js";
import React, { useEffect, useState } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader.js";
import DotLoader from "react-spinners/DotLoader.js";

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
        <DotLoader color="#4911c1" />
      ) : (
        <TodoWrapper className="TodoWrapper" />
      )}
    </div>
  );
}

export default App;
