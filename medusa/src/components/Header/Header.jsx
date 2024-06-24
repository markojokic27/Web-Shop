import Navigation from "./Navigation/Navigation";
import classes from "./index.module.css";


function Header() {
  return (
    <div>
      <div className={classes.header}>
        <div className={classes.header__wrapper}>
          <Navigation/>
        </div>
      </div>
    </div>
  );
}

export default Header;









