import { NavLink } from "react-router-dom";
import { StyledNav } from "./Navigation.styled";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <StyledNav>
      <NavLink
        to="/"
        // exact="true"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.inactiveLink
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        // exact="true"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.inactiveLink
        }
      >
        Movies
      </NavLink>
    </StyledNav>
  );
};

export default Navigation;
