import { Link } from "react-router-dom";
import style from "./StandardButton.module.css";

const StandardButton = ({ link, name }) => {
  return (
    <Link className={style.StandardButton} to={link}>
      {name}
    </Link>
  );
};

export default StandardButton;
