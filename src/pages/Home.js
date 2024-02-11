// -------------- STYLE -----------------
import style from "./Home.module.css";
// -------------- LOGIC -----------------

// -------------- ELEMENTS -----------------
import { TodoWrapper } from "../components/TodoWrapper";

function Home() {
  return (
    <div className={style.Home}>
      <h2
        style={{
          textTransform: "uppercase",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        Welcome to <br />{" "}
        <span>
          <span className={style.S}>#S</span>wift
          <span className={style.L}>L</span>ist
          <span className={style.dot}>.</span>
        </span>
      </h2>
      <TodoWrapper />
    </div>
  );
}

export default Home;
