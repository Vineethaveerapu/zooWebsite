import { pages } from "/src/data/pages.js";
import { Link, useLocation } from "react-router-dom";
import styles from "../Header/Header.module.css";
import { useState, useEffect } from "react";
import { List, X } from "@phosphor-icons/react";

const Navigation = () => {
  // get current page from router
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close mobile menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const menuButtonClick = () => {
    setIsOpen(isOpen ? false : true);
  };

  return (
    <>
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
    </>
  );
};

export default Navigation;
