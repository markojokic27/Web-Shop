
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
        <a href="a">SHOP</a>
        <a href="a">CART</a>
        <a href="a">ABOUT</a>
        <DarkMode id="2" theme={props.theme} toggleTheme={props.toggleTheme} />
        
        
      </div>
    </div>
  );
}

export default MobileMenu;
