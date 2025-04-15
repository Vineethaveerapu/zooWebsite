import styles from "./Sidebar.module.css";

const Sidebar = ({ animals, handleSidebarClick, activeItem, title }) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <h2>{title}</h2>
      </div>
      <div className={styles.sidebarContent}>
        {animals.map((animal) => (
          <div
            key={animal.name}
            onClick={() => handleSidebarClick(animal)}
            className={`${styles.sidebarItem} ${
              activeItem === animal ? styles.active : ""
            }`}
          >
            {animal.name}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
