import styles from "./StandardButton.module.css";

const StandardButton = ({ link, name }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      {name}
    </a>
  );
};

export default StandardButton;
