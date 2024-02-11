import React from "react";
import "./ButtonCheckbox.module.css";
import style from "./ButtonCheckbox.module.css";
import { useState } from "react";

const ButtonCheckbox = () => {
  const [stayLogged, setStayLogged] = useState(false);

  const handleButtonClick = () => {
    setStayLogged(!stayLogged);
  };

  return (
    <div>
      <label className={style.switch}>
        <input
          onChange={handleButtonClick}
          className={style.checkbox}
          type="checkbox"
        />
        <div className={style.slider}></div>
      </label>
      {console.log("stay logged in:" + stayLogged)};
    </div>
  );
};

export default ButtonCheckbox;
