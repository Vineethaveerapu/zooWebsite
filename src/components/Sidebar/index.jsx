import styles from "./Sidebar.module.css";

const Sidebar = ({ animals }) => {
  return (
    <aside className={styles.sidebar}>
      <div>
        {animals.map((animal) => (
          <div key={animal.name}>{animal.name}</div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
