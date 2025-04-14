import BackgroundMedia from "/src/components/BackgroundMedia";
import Sidebar from "/src/components/Sidebar";
import { reptiles } from "/src/data/animals.js";
import FeaturedContent from "/src/components/FeaturedContent";

const Reptiles = ({ title }) => {
  return (
    <div>
      <BackgroundMedia
        video="/src/assets/video1.mp4"
        // image="/src/assets/lizard.png"
      >
        <h1>{title}</h1>
      </BackgroundMedia>
      <Sidebar animals={reptiles} />
      <FeaturedContent pageName="Reptiles" />
    </div>
  );
};

export default Reptiles;
