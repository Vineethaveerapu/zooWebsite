import { mainContent } from "/src/data/mainContent.js";
import styles from "./FeaturedContent.module.css";
import AnimalCard from "../AnimalCard";

const FeaturedContent = ({ pageName, activeItem, handleSidebarClick }) => {
  if (activeItem) {
    return (
      <AnimalCard
        pageName={pageName}
        activeItem={activeItem}
        handleSidebarClick={handleSidebarClick}
      />
    );
  }

  if (!pageName) return "No page name provided prop pageName required";

  const pageContent = mainContent.find(
    (item) => item.name.toLowerCase() === pageName.toLowerCase()
  );

  if (!pageContent) return "No content found for pageName";

  const { name, content, steps } = pageContent;

  return (
    <section className={styles.featuredContentContainer}>
      <div className={styles.featuredContent}>
        <h2>{name}</h2>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <div dangerouslySetInnerHTML={{ __html: steps }} />
      </div>
    </section>
  );
};

export default FeaturedContent;
