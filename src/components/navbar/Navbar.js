// --- COMPONENTS
import StandardButton from "../buttons/std-btn/StandardButton";

// --- DATA; FUNCTIONS

// --- CSS
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <StandardButton link="/" name="Home" />

      <div className={styles.menu}>
        <StandardButton link="/Login" name="Login" />
        <StandardButton link="" name="About" />
        <StandardButton link="" name="Contact" />
      </div>
    </div>
  );
};

export default Navbar;

//  style={navStyle}
// const navStyle = {
//   getGridTemplateColumn: style,
// };
