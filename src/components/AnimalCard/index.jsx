import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "../FeaturedContent/FeaturedContent.module.css";
import { XSquare } from "@phosphor-icons/react";
import animalCardStyles from "./AnimalCard.module.css";

const AnimalCard = ({ pageName, activeItem, handleSidebarClick }) => {
  const [showReadMore, setShowReadMore] = useState(false);
  const modalRef = useRef(null);
  // Reset showReadMore when activeItem changes
  useEffect(() => {
    setShowReadMore(false);
  }, [activeItem]);

  if (!activeItem) return null;

  // check if home page
  const isHomePage = pageName.includes("home");

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

  const openModal = () => {
    modalRef.current.showModal();
  };

  const closeModal = () => {
    modalRef.current.close();
  };

  return (
    <>
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
              <button
                className={animalCardStyles.readButton}
                onClick={openModal}
              >
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

      <dialog ref={modalRef}>
        <XSquare
          size={50}
          onClick={closeModal}
          className={animalCardStyles.closeButton}
        />
        <div>
          <p>Name: {name}</p>
          <p>Food: {food}</p>
          <p>Found: {found}</p>
          <p>Group: {group}</p>
          <p>Description: {description}</p>
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
        </div>
      </dialog>
    </>
  );
};

export default AnimalCard;
