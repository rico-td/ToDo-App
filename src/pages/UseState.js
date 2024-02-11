import ButtonCheckbox from "../components/ButtonCheckbox";
import style from "./UseState.module.css";
import { useState } from "react";

function UseState() {
  return (
    <div className={style.UseState}>
      <h1 style={{ color: "black", textAlign: "center", marginTop: "50px" }}>
        How to use the React Hook
        <br />
        <span>#UseState</span>
      </h1>
      <br />
      <br />
      <br />
      <ButtonCheckbox />
      <ul
        style={{
          fontSize: "20px",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        <li>
          A <strong>State</strong> is data that changes over time.
        </li>
        <li>
          <strong>Data</strong> that may differ from one point to another.
        </li>
        <li>
          Or, here in react: from <strong>one Render to another.</strong>
        </li>
        <li>
          there is a <strong>Current or Initial State</strong> and the{" "}
          <strong>Final State</strong>.
        </li>
      </ul>
      <p>const = [ initialState, FinalState ] = useState(InitialValue)</p>
      <span>to be continued...</span>
    </div>
  );
}

export default UseState;
