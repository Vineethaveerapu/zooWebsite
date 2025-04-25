import { XSquare } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import animalCardStyles from "./AnimalCard.module.css";

const AnimalModal = ({
  modalRef,
  activeItem,
  handleSidebarClick,
  closeModal
}) => {
  const { name, food, found, group, description, groupSlug } = activeItem;

  return (
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
  );
};

export default AnimalModal;
