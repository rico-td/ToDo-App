import React from "react";
import "./ButtonCheckbox.module.css";
import style from "./ButtonCheckbox.module.css";

const ButtonCheckbox = () => {
  return (
    <div>
      <label className={style.switch}>
        <input className={style.checkbox} type="checkbox" />
        <div className={style.slider}></div>
      </label>
    </div>
  );
};

export default ButtonCheckbox;
