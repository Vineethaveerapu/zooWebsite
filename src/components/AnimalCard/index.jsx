import { useState, useEffect, useRef } from "react";
import AnimalCardContent from "./AnimalCardContent";
import AnimalModal from "./AnimalModal";

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
      <AnimalCardContent
        activeItem={activeItem}
        showReadMore={showReadMore}
        handleReadMore={handleReadMore}
        openModal={openModal}
        isHomePage={isHomePage}
        handleSidebarClick={handleSidebarClick}
      />
      <AnimalModal
        modalRef={modalRef}
        activeItem={activeItem}
        handleSidebarClick={handleSidebarClick}
        closeModal={closeModal}
      />
    </>
  );
};

export default AnimalCard;
