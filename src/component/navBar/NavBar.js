import React from "react";
import Icon from "../../assets/icons/Icons";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.navContainer}>
      <div>
        <Icon name="logo" />
      </div>
      <div className={styles.navItems}>
        <ul>
          <li>The App</li>
          <li>About Us</li>
          <li>Get in Touch</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
