import { Link } from "react-router-dom";
import style from "./HomeButton.module.css";

const HomeButton = () => {
  return (
    <Link className={style.HomeButton} to="/">
      #SwiftList
    </Link>
  );
};

export default HomeButton;
