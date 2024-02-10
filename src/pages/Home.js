// -------------- STYLE -----------------
import "./Home.module.css";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader.js";

// -------------- LOGIC -----------------
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Login, About, Contact } from "./";

// -------------- ELEMENTS -----------------
import Navbar from "../components/Navbar";
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
          {/* <Navbar className="navbar"></Navbar> */}
          <h1>Home</h1>
          <Link to="/"></Link>
        </>
      )}
    </div>
  );
}

export default Home;
