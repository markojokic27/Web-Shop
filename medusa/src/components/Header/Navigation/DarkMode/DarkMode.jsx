import classes from "./index.module.css";
import images from "../../../../assets/images/index";

function DarkMode() {
  const setMode = (mode) => {
    document.querySelector("body").setAttribute("data-theme", mode);
    localStorage.setItem("theme", mode);
  };
  const theme = localStorage.getItem("theme");
  if (theme) setMode(theme);
  const toggleTheme = (e) => setMode(e.target.checked ? "dark" : "light");

  return (
    <div className={classes.darkMode}>
      <input
        type="checkbox"
        id={`darkmode-toggle`}
        onChange={toggleTheme}
        defaultChecked={theme === "dark"}
        className={classes.darkMode__input}
      />
      <label htmlFor={`darkmode-toggle`} className={classes.darkMode__label}>
        <img
          src={images.sun}
          alt="Sun"
          style={{ width: "30px" }}
          className={classes.darkMode__sun}
        />
        <img
          src={images.moon}
          alt="Moon"
          style={{ width: "30px" }}
          className={classes.darkMode__moon}
        />
      </label>
    </div>
  );
}

export default DarkMode;
