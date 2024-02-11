// --- COMPONENTS
import { StandardButton, HomeButton } from "./Buttons";

// --- DATA; FUNCTIONS

// --- CSS
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <HomeButton link="/" name="Home" />

      <div className={style.menu}>
        <StandardButton link="/Login" name="Login" />
        <StandardButton link="/About" name="About" />
      </div>
    </div>
  );
};
export default Navbar;

// style={navStyle}
// const navStyle = {
// getGridTemplateColumn: style,
