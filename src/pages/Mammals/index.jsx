import BackgroundMedia from "/src/components/BackgroundMedia";
import Sidebar from "/src/components/Sidebar";
import { mammals } from "/src/data/animals.js";
import FeaturedContent from "/src/components/FeaturedContent";

const Mammals = ({ title }) => {
  return (
    <div>
      <BackgroundMedia
        video="/src/assets/video1.mp4"
        image="/src/assets/lizard.png"
      >
        <h1>{title}</h1>
      </BackgroundMedia>
      <Sidebar animals={mammals} />
      <FeaturedContent pageName="Mammals" />
    </div>
  );
};

export default Mammals;
