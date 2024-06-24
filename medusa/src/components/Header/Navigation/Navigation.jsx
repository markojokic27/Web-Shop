import classes from "./index.module.css";
import images from "../../../assets/images/index";
import DarkMode from "../DarkMode/DarkMode";
import { Link } from "react-router-dom";

function Navigation(props) {
  return (
    <div className={classes.header__navigation}>
      <div className={classes.header__logo}>
        <img
          src={images.logoLight}
          alt="logo"
          className={classes.header__logo__img}
        />
      </div>

      <ul>
        <Link to="/">Shop</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/about">About</Link>
        <div className={classes.header__underline}></div>
      </ul>

      <DarkMode id="1" theme={props.theme} toggleTheme={props.toggleTheme}/>
    </div>
  );
}

export default Navigation;
