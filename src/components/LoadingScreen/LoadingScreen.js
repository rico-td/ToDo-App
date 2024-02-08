import { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./LoadingScreen.module.css";

function LoadingScreen() {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className={style.LoadingScreen}>
          <p id="loadingText">Loading...</p>
        </div>
      ) : null}
    </div>
  );
}

export default LoadingScreen;
