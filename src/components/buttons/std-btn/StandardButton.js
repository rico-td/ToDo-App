import { Link } from "react-router-dom";
import styles from "./StandardButton.module.css";

const StandardButton = ({ link, name }) => {
  return <Link to={link}>{name}</Link>;
};

export default StandardButton;
