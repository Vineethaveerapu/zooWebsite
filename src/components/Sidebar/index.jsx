import styles from "./Sidebar.module.css";

const Sidebar = ({ animals, handleSidebarClick, activeItem }) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        {animals.map((animal) => (
          <div
            key={animal.name}
            onClick={() => handleSidebarClick(animal)}
            className={activeItem === animal ? styles.active : ""}
          >
            {animal.name}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
