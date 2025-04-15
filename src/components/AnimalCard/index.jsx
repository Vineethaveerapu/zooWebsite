import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../FeaturedContent/FeaturedContent.module.css";

const AnimalCard = ({ pageName, activeItem, handleSidebarClick }) => {
  const [showReadMore, setShowReadMore] = useState(false);

  // check if home page
  const isHomePage = pageName.includes("home");

  if (activeItem) {
    const {
      name,
      image,
      description,
      groupSlug,
      group,
      weight,
      length,
      food,
      lifespan,
      found
    } = activeItem;

    const shortDescription = description.slice(0, 169);

    const handleReadMore = () => {
      setShowReadMore(!showReadMore);
    };

    return (
      <section className={styles.featuredContentContainer}>
        <div className={styles.featuredContent}>
          <h2>{name}</h2>
          <img src={image} alt={name} height={300} width={300} />
          {showReadMore ? (
            <div>
              <p>Name: {name}</p>
              <p>Weight: {weight}</p>
              <p>Length: {length}</p>
              <p>Food: {food}</p>
              <p>Lifespan: {lifespan}</p>
              <p>Found: {found}</p>
              <p>Group: {group}</p>
              <p>Description: {description}</p>
            </div>
          ) : (
            <p>{shortDescription}...</p>
          )}

          {isHomePage ? (
            <>
              <p>{shortDescription}...</p>
              <Link
                to={`${groupSlug}`}
                onClick={() => {
                  handleSidebarClick(null);
                }}
              >
                Visit {group}
              </Link>
            </>
          ) : (
            <button onClick={handleReadMore}>
              {showReadMore ? "Read Less" : "Read More"}
            </button>
          )}
        </div>
      </section>
    );
  }
};

export default AnimalCard;
