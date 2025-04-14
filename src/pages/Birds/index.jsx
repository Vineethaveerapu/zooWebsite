import BackgroundMedia from "/src/components/BackgroundMedia";
import Sidebar from "/src/components/Sidebar";
import { birds } from "/src/data/animals.js";
import FeaturedContent from "/src/components/FeaturedContent";

const Birds = ({ title }) => {
  return (
    <div>
      <BackgroundMedia
        video="/src/assets/video1.mp4"
        image="/src/assets/lizard.png"
      >
        <h1>{title}</h1>
      </BackgroundMedia>
      <Sidebar animals={birds} />
      <FeaturedContent pageName="Birds" />
    </div>
  );
};

export default Birds;
