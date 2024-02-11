import style from "./SignInForm.module.css";

import React from "react";
import ButtonCheckbox from "../ButtonCheckbox";

const SignInForm = () => {
  return (
    <div className={style.wrapper}>
      <h1
        style={{
          textDecoration: "underline",
          textAlign: "center",
          marginTop: "20px",
          color: "var(--purpleBright)",
        }}
      >
        LOGIN
      </h1>
      <input
        className={style.input}
        type="text"
        placeholder="enter your E-Mail or Username..."
      />
      <input
        className={style.input}
        type="text"
        placeholder="enter your password..."
      />
      <p>stay logged in</p>
      <ButtonCheckbox />
    </div>
  );
};

export default SignInForm;
