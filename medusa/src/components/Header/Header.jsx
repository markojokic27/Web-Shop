import { useState } from "react";
import Navigation from "./Navigation/Navigation";
import classes from "./index.module.css";
import Hamburger from "./MobileMenu/Hamburger";
import MobileMenu from "./MobileMenu/MobileMenu";

function Header() {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const setMode = (mode) => {
    document.querySelector("body").setAttribute("data-theme", mode);
    localStorage.setItem("theme", mode);
  };
  const theme = localStorage.getItem("theme");
  if (theme) setMode(theme);
  const toggleTheme = (e) => setMode(e.target.checked ? "dark" : "light");
  return (
    <div>
      <div className={classes.header}>
        <div className={classes.header__wrapper}>
          <Navigation theme={theme} toggleTheme={toggleTheme} />
          <Hamburger  
            hamburgerActive={hamburgerActive}
            setHamburgerActive={setHamburgerActive}
          />
        </div>
      </div>
      <MobileMenu
        hamburgerActive={hamburgerActive}
        setHamburgerActive={setHamburgerActive}
        theme={theme}
        toggleTheme={toggleTheme}
      />
    </div>
  );
}

export default Header;
