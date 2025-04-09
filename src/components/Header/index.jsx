import { Link } from "react-router-dom";
import logo from "/src/assets/logo.png";
import { pages } from "/src/data/pages.js";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <section className={styles.header}>
      <Link to="/">
        <img src={logo} alt="logo" width={90} height={90} />
      </Link>
      <nav className={styles.nav}>
        {pages.map((page) => (
          <Link to={page.slug} key={page.slug}>
            {page.name}
          </Link>
        ))}
      </nav>
    </section>
  );
};

export default Header;
