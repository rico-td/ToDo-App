import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  const backgroundColor = "#f0f0f0";
  const textColor = "#333";

  return (
    <div className="App" style={{ backgroundColor, color: textColor }}>
      <h1>React Color Theme Example</h1>
      <p>Current Count: {count}</p>
      <button onClick={handleClick}>Increment Count</button>
    </div>
  );
}

export default App;
