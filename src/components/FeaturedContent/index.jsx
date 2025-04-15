import { mainContent } from "/src/data/mainContent.js";
import { Link } from "react-router-dom";
const FeaturedContent = ({ pageName, activeItem, handleSidebarClick }) => {
  if (activeItem) {
    const { name, image, description, groupSlug } = activeItem;
    const shortDescription = description.slice(0, 100);

    return (
      <div>
        <h2>{name}</h2>
        <img src={image} alt={name} />
        <p>{shortDescription}</p>
        <Link
          to={`${groupSlug}`}
          onClick={() => {
            handleSidebarClick(null);
          }}
        >
          Learn More
        </Link>
      </div>
    );
  }

  if (!pageName) return "No page name provided prop pageName required";

  const pageContent = mainContent.find(
    (item) => item.name.toLowerCase() === pageName.toLowerCase()
  );

  if (!pageContent) return "No content found for pageName";

  const { name, content, steps } = pageContent;

  return (
    <div className={styles.mainContent}>
      <h2>{name}</h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <div dangerouslySetInnerHTML={{ __html: steps }} />
    </div>
  );
};

export default FeaturedContent;
