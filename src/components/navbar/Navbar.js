// --- COMPONENTS
import StandardButton from "../buttons/std-btn/StandardButton";

// --- DATA; FUNCTIONS

// --- CSS
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <StandardButton link="https://www.google.com" name="Home" />

      <div className={styles.menu}>
        <StandardButton link="https://www.google.com" name="About" />
        <StandardButton link="https://www.google.com" name="Artwork" />
        <StandardButton link="https://www.google.com" name="Contact" />
      </div>
    </div>
  );
};

export default Navbar;

//  style={navStyle}
// const navStyle = {
//   getGridTemplateColumn: style,
// };
