import { Link, useLocation } from "react-router-dom";
import logo from "/src/assets/logo.png";
import { pages } from "/src/data/pages.js";
import styles from "./Header.module.css";

const Header = () => {
  // get current page from router
  const location = useLocation();
  return (
    <header className={styles.header}>
      <Link to="/" aria-label="Home">
        <img src={logo} alt="Zoo Logo" width={90} height={90} />
      </Link>
      <nav className={styles.nav} aria-label="Main Navigation">
        {pages.map((page) => (
          <Link
            to={page.slug}
            key={page.slug}
            className={location.pathname === page.slug ? styles.active : ""}
            aria-current={location.pathname === page.slug ? "page" : undefined}
          >
            {page.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
