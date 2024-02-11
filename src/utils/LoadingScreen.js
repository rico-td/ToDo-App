import React, { useEffect, useState } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader.js";

const LoadingScreen = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return loading ? (
    <>
      <ClimbingBoxLoader
        style={{ width: 100 }}
        className="width: 100px"
        color="#71CAD6"
        size={20}
      />
    </>
  ) : (
    children
  );
};

export default LoadingScreen;

// asdads
