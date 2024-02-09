// -------------- STYLE -----------------
import "./Home.module.css";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader.js";

// -------------- LOGIC -----------------
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

// -------------- ELEMENTS -----------------
import Navbar from "../components/navbar";
import { TodoWrapper } from "../components/TodoWrapper";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="home">
      {loading ? (
        <>
          <ClimbingBoxLoader
            style={{}}
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

export default Home;
