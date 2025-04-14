import { mainContent } from "/src/data/mainContent.js";

const FeaturedContent = ({ pageName }) => {
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
