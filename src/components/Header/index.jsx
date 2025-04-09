import { Link, useLocation } from "react-router-dom";
import logo from "/src/assets/logo.png";
import { pages } from "/src/data/pages.js";
import styles from "./Header.module.css";

const Header = () => {
  // get current page from router
  const location = useLocation();
  console.log(location);
  return (
    <section className={styles.header}>
      <Link to="/">
        <img src={logo} alt="logo" width={90} height={90} />
      </Link>
      <nav className={styles.nav}>
        {pages.map((page) => (
          <Link
            to={page.slug}
            key={page.slug}
            className={location.pathname === page.slug ? styles.active : ""}
          >
            {page.name}
          </Link>
        ))}
      </nav>
    </section>
  );
};

export default Header;
