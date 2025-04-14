import BackgroundMedia from "/src/components/BackgroundMedia";
import Sidebar from "/src/components/Sidebar";
import { allAnimals } from "/src/data/animals.js";
import FeaturedContent from "/src/components/FeaturedContent";
import Main from "/src/components/Main";

const Home = ({ title }) => {
  return (
    <div>
      <BackgroundMedia video="/src/assets/video1.mp4">
        <h1>{title}</h1>
      </BackgroundMedia>

      <Main>
        <Sidebar animals={allAnimals} />
        <FeaturedContent pageName="Home" />
      </Main>
    </div>
  );
};

export default Home;
