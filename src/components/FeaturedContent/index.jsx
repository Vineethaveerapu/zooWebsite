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

  return (
    <div>
      <h2>{pageContent.name}</h2>
      <p>{pageContent.content}</p>
    </div>
  );
};

export default FeaturedContent;
