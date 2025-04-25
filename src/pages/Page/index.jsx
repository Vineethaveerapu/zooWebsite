import BackgroundMedia from "/src/components/BackgroundMedia";
import Sidebar from "/src/components/Sidebar";
import getAnimalsByGroup from "/src/data/animals.js";
import FeaturedContent from "/src/components/FeaturedContent";
import Main from "/src/components/Main";
import { useState, useEffect } from "react";

const Page = ({ title, slug, sidebarTitle }) => {
  const animals = getAnimalsByGroup(slug);
  // need a state to hold current sidebar click active item
  const [activeItem, setActiveItem] = useState(null);

  // Reset activeItem when slug changes
  useEffect(() => {
    setActiveItem(null);
  }, [slug]);

  const handleSidebarClick = (item) => {
    // if already active, remove that item
    if (activeItem === item) {
      setActiveItem(null);
    } else {
      setActiveItem(item);
    }
  };

  let video = null;
  let image = null;

  switch (slug) {
    case "birds":
      image = new URL(`/src/assets/birds.avif`, import.meta.url).href;
      break;
    case "mammals":
      image = new URL(`/src/assets/mammals.avif`, import.meta.url).href;
      break;
    case "reptiles":
      image = new URL(`/src/assets/reptiles.avif`, import.meta.url).href;
      break;

    case "home":
    default:
      video = new URL(`/src/assets/video1.mp4`, import.meta.url).href;
      break;
  }

  return (
    <div>
      <BackgroundMedia video={video} image={image}>
        <h1>{title}</h1>
      </BackgroundMedia>

      <Main>
        <Sidebar
          animals={animals}
          activeItem={activeItem}
          handleSidebarClick={handleSidebarClick}
          title={sidebarTitle}
        />
        <FeaturedContent
          pageName={slug}
          activeItem={activeItem}
          handleSidebarClick={handleSidebarClick}
        />
      </Main>
    </div>
  );
};

export default Page;
