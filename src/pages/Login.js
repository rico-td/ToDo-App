import React, { useEffect, useState } from "react";

const Login = () => {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setisLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return <div>{isLoading ? "Loading..." : "Login Page"}</div>;
};

export default Login;
