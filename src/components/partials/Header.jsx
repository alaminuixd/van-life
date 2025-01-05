import React from "react";

import { NavLink } from "react-router-dom";
import expLogo from "./images/exp-logo.png";
import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <div className={styles["topLogo"]}>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? styles["active"] : "")}
        >
          <img src={expLogo} alt="" />
        </NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) => (isActive ? styles["active"] : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/products"}
              className={({ isActive }) => (isActive ? styles["active"] : "")}
            >
              Products
            </NavLink>
          </li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        <button>Signin</button>
      </nav>
    </header>
  );
}

export default Header;
