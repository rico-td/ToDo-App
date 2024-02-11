// -------------- STYLE -----------------
import style from "./Home.module.css";
// -------------- LOGIC -----------------

// -------------- ELEMENTS -----------------
import { TodoWrapper } from "../components/TodoWrapper";

function Home() {
  return (
    <div className={style.Home}>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        HOME PAGE
      </h1>
      <TodoWrapper />
    </div>
  );
}

export default Home;
