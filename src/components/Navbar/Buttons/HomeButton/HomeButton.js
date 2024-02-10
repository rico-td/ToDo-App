import { Link } from "react-router-dom";
import style from "./HomeButton.module.css";

const HomeButton = ({ link, name }) => {
  return (
    <Link className={style.HomeButton} to={link}>
      {name}
    </Link>
  );
};

export default HomeButton;
