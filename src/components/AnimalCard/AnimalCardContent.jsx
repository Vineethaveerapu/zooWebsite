import { Link } from "react-router-dom";
import styles from "../FeaturedContent/FeaturedContent.module.css";
import animalCardStyles from "./AnimalCard.module.css";

const AnimalCardContent = ({
  activeItem,
  showReadMore,
  handleReadMore,
  openModal,
  isHomePage,
  handleSidebarClick
}) => {
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

  return (
    <section className={styles.featuredContentContainer}>
      <div className={styles.featuredContent}>
        <h2>{name}</h2>
        <img src={image} alt={name} height={300} width={300} />
        {showReadMore ? (
          <div>
            <p>
              <b>Name</b>: {name}
            </p>
            <p>
              <b>Weight</b>: {weight}
            </p>
            <p>
              <b>Length</b>: {length}
            </p>
            <p>
              <b>Food</b>: {food}
            </p>
            <p>
              <b>Lifespan</b>: {lifespan}
            </p>
            <p>
              <b>Found</b>: {found}
            </p>
            <p>
              <b>Group</b>: {group}
            </p>
            <p>
              <b>Description</b>: {description}
            </p>
          </div>
        ) : (
          <p>{shortDescription}...</p>
        )}

        {isHomePage ? (
          <>
            <button className={animalCardStyles.readButton} onClick={openModal}>
              Read More
            </button>
            <Link
              to={{
                pathname: `/${groupSlug}`,
                hash: `#${activeItem.name}`
              }}
              onClick={() => {
                handleSidebarClick(null);
              }}
              className={animalCardStyles.readButton}
            >
              Visit {group} for more information
            </Link>
          </>
        ) : (
          <button
            className={animalCardStyles.readButton}
            onClick={handleReadMore}
          >
            {showReadMore ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    </section>
  );
};

export default AnimalCardContent;
