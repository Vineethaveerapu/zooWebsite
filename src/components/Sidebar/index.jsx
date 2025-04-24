import styles from "./Sidebar.module.css";
import { useState } from "react";
import { XCircle, CaretCircleRight } from "@phosphor-icons/react";

const Sidebar = ({ animals, handleSidebarClick, activeItem, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuButtonClick = () => {
    setIsOpen(isOpen ? false : true);
  };

  const handleClick = (animal) => () => {
    menuButtonClick();
    handleSidebarClick(animal);
  };

  return (
    <aside className={styles.sidebar}>
      <button
        onClick={menuButtonClick}
        className={styles.mobileMenuButton + (isOpen ? " " + styles.open : "")}
      >
        {isOpen ? <XCircle size={32} /> : <CaretCircleRight size={32} />}
      </button>
      <div
        className={styles.contentWrapper + (isOpen ? " " + styles.open : "")}
      >
        <div className={styles.sidebarHeader}>
          <h2>{title}</h2>
        </div>
        <div className={styles.sidebarContent}>
          {animals.map((animal) => (
            <div
              key={animal.name}
              onClick={handleClick(animal)}
              className={`${styles.sidebarItem} ${
                activeItem === animal ? styles.active : ""
              }`}
            >
              {animal.name}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
