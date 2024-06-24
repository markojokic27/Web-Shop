import classes from "./index.module.css";
import images from "../../../assets/images/index";
import DarkMode from "./DarkMode/DarkMode";

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
        <a href="google.com">Shop</a>
        <a href="google.com">Medusa</a>
        <a href="google.com">About</a>
        <div className={classes.header__underline}></div>
      </ul>

      <DarkMode />
    </div>
  );
}

export default Navigation;
