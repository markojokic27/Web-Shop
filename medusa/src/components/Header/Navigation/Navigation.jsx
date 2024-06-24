import classes from "./index.module.css";
function Navigation(props) {
  return (
    <div className={classes.header__navigation}>
      <ul>
        <a href="google.com">Shop</a>
        <a href="google.com">Medusa</a>
        <a href="google.com">About</a>
        <div className={classes.header__underline}></div>
      </ul>
    </div>
  );
}

export default Navigation;
