// --- COMPONENTS
import { StandardButton, HomeButton } from "./Buttons";

// --- DATA; FUNCTIONS

// --- CSS
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <HomeButton />

      <div className={style.menu}>
        <StandardButton link="/Login" name="Login" />
        <StandardButton link="/UseState" name="UseState" />
      </div>
    </div>
  );
};
export default Navbar;

// style={navStyle}
// const navStyle = {
// getGridTemplateColumn: style,
