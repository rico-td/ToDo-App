import "./App.css";
import TodoWrapper from "./components/TodoWrapper/TodoWrapper.js";
import React, { useEffect, useState } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader.js";

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
        <div className="loading">
          ToDo App
          <br />
          <br />
          Loading...
        </div>
      ) : (
        <TodoWrapper className="TodoWrapper" />
        // <ClimbingBoxLoader color="#36d7b7" />
      )}
    </div>
  );
}

export default App;
