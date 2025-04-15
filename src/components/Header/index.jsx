import { Link, useLocation } from "react-router-dom";
import logo from "/src/assets/logo.png";
import { pages } from "/src/data/pages.js";
import styles from "./Header.module.css";
import { List, X } from "@phosphor-icons/react";
import { useState, useEffect } from "react";

const Header = () => {
  // get current page from router
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const menuButtonClick = () => {
    setIsOpen(isOpen ? false : true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <Link to="/" aria-label="Home">
        <img src={logo} alt="Zoo Logo" width={90} height={90} />
      </Link>
      <nav
        className={styles.nav + (isOpen ? " " + styles.open : "")}
        aria-label="Main Navigation"
      >
        {pages.map((page) => (
          <Link
            to={page.slug}
            key={page.slug}
            className={location.pathname === page.slug ? styles.active : ""}
            aria-current={location.pathname === page.slug ? "page" : undefined}
            onClick={closeMenu}
          >
            {page.name}
          </Link>
        ))}
      </nav>
      <button
        onClick={menuButtonClick}
        className={styles.mobileMenuButton + (isOpen ? " " + styles.open : "")}
      >
        {isOpen ? <X size={32} /> : <List size={32} />}
      </button>
    </header>
  );
};

export default Header;
