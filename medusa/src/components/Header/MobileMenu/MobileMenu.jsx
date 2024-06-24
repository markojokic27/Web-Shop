import { Link } from "react-router-dom";
import DarkMode from "../DarkMode/DarkMode";
import classes from "./index.module.css";

function MobileMenu(props) {
  function handleClick() {
    props.setHamburgerActive(!props.hamburgerActive);
  }
  return (
    <div
      className={`${classes.header__mobileMenu} ${
        props.hamburgerActive ? classes.active : ""
      }`}
    >
      <div className={classes.mobileMenu__wrapper} onClick={handleClick}>
        <Link to="/">SHOP</Link>
        <Link to="/cart">CART</Link>
        <Link to="/about">ABOUT</Link>
        <DarkMode id="2" theme={props.theme} toggleTheme={props.toggleTheme} /> 
      </div>
    </div>
  );
}

export default MobileMenu;
