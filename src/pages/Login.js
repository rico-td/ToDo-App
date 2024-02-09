import "../App.css";
import TodoWrapper from "../components/TodoWrapper/TodoWrapper.js";
import React, { useEffect, useState } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader.js";
import Navbar from "../components/navbar/Navbar.js";
import { Routes, Route } from "react-router-dom";

function Login() {
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
          <Navbar className="navbar"></Navbar>
          <h1>Welcome to Login</h1>
        </>
      )}
    </div>
  );
}

export default Login;
