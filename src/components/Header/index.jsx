import { Link } from "react-router-dom";
import logo from "/src/assets/logo.png";

import styles from "./Header.module.css";
import { List, X } from "@phosphor-icons/react";
import Navigation from "../Navigation";

const Header = () => {
  // get current page from router

  return (
    <header className={styles.header}>
      <Link to="/" aria-label="Home">
        <img src={logo} alt="Zoo Logo" width={90} height={90} />
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;
